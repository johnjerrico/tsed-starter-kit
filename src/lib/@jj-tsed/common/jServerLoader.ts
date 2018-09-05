import * as Http from "http";
import * as Https from "https";
import * as config from "config";
import * as Express from "express";
import { $log } from "ts-log-debug";
import { Metadata, isClass } from "@tsed/core";
import { JLogIncomingRequest } from "./jLogIncomingRequest";
import { 
    ExpressApplication,
    IServerLifecycle,
    IComponentScanned,
    InjectorService,
    HandlerBuilder ,
    HttpServer,
    HttpsServer,
    IHTTPSServerOptions,
    GlobalErrorHandlerMiddleware,
    ServerSettingsService
} from "@tsed/common";
import { AddressInfo } from "net";
import webpackComponents from "webpack.chunk.index";

export abstract class JServerLoader implements IServerLifecycle {
    public version: string = "0.0.0-PLACEHOLDER";
    private _components: IComponentScanned[] = [];
    private _injector: InjectorService;
    private _scannedPromises: Promise<any>[] = [];

    public async load() {
        this._injector = new InjectorService();
        this.createExpressApplication();
        
        if ((this as any).$onAuth) {
            $log.warn("The $onAuth hooks is removed. Use OverrideMiddleware method instead of. See https://goo.gl/fufBTE.");
        }
        
        await this.init();
        return this;
    }

    protected async init() {

        // get config from file or from decorators

        const webconfig = Metadata.get("tsed:server:settings",this);

        const { mount, ...others } = config.server;
        
        // merge config

        Metadata.set("tsed:server:settings", { ...others, ...webconfig }, this);
         
        const settings = ServerSettingsService.getMetadata(this);
        
        this.settings.set(settings);

        // registering middlewares,services,controllers,filters

        for (let i = 0 ; i < webpackComponents.length ; i++)  {
             Object.keys(webpackComponents[i]).map(key => {
                if (key.indexOf('endpoints') == 0 ){
                    webpackComponents[i][key].forEach(t =>{
                        Object.keys(t).forEach(innerKey => {
                            this.register(t[innerKey],innerKey.replace(/_/g,"/"));
                        });
                    })
                }else {
                    this.register(webpackComponents[i][key]);
                }
             })
        }
        
        // starting server
        
        if (this.settings.get("env") === "test") {
            $log.stop();
        }

        const bind = (property: string, value: any, map: Map<string, any>) => {
            switch (property) {

                case "httpPort":
                    /* istanbul ignore else */
                    if (value !== false && this.httpServer === undefined) {
                        this.createHttpServer(value);
                    }

                break;

                case "httpsPort":
                    /* istanbul ignore else */
                    if (value !== false && this.httpsServer === undefined) {
                        this.createHttpsServer(Object.assign(map.get("httpsOptions") || {}, {port: value}));
                    }

                break;
            }
        };

        this.settings.forEach((value, key, map) => {
            /* istanbul ignore else */
            if (value !== undefined) {
              bind(key, value, map);
            }
        });
    }

    private createExpressApplication(): JServerLoader {
        const expressApp = Express();
        const originalUse = expressApp.use;
        const injector = this.injector;
    
        expressApp.use = function(...args: any[]) {
          args = args.map(arg => {
            if (injector.has(arg)) {
              arg = HandlerBuilder.from(arg).build(injector);
            }
    
            return arg;
          });
    
          return originalUse.call(this, ...args);
        };
    
        this.injector.forkProvider(ExpressApplication, expressApp);
    
        return this;
    }

    public createHttpServer(port: string | number): JServerLoader {
        const httpServer: any = Http.createServer(this.expressApp);
        // TODO to be removed
        /* istanbul ignore next */
        httpServer.get = () => httpServer;

        this.injector.forkProvider(HttpServer, httpServer);

        this.settings.httpPort = port;

        return this;
    }
    
    public createHttpsServer(options: IHTTPSServerOptions): JServerLoader {
        const httpsServer: any = Https.createServer(options, this.expressApp);
        // TODO to be removed
        /* istanbul ignore next */
        httpsServer.get = () => httpsServer;

        this.injector.forkProvider(HttpsServer, httpsServer);

        this.settings.httpsPort = options.port;

        return this;
    }

 
    private callHook = (key: string, elseFn = new Function(), ...args: any[]) => {
        const self: any = this;

        if (key in this) {
            $log.debug(`\x1B[1mCall hook ${key}\x1B[22m`);

            return self[key](...args);
        }

        return elseFn();
    };

    public register(instance:any, endpoint?:string) {
        Object.keys(instance).forEach(x => {
            if (endpoint){
                this.addControllers(endpoint, {x:instance[x]});
            }else {
                this.addComponents({x:instance[x]});
            }
        });
    }

    public addControllers(endpoint: string, controllers: any) {
        return this.addComponents(controllers, {endpoint});
    }

    public addComponents(classes: any | any[], options: Partial<IComponentScanned> = {}): JServerLoader {
        classes = Object.keys(classes)
          .map(key => classes[key])
          .filter(clazz => isClass(clazz));
    
        const components: any = Object.assign(options, {classes});
    
        this._components = (this._components || []).concat([components]).filter(o => !!o);
        return this;
    }

    protected loadStatic(expressApp:ExpressApplication) {
      expressApp.use("/public",Express.static(static_path));
    }

    protected async loadSettingsAndInjector() {
        $log.debug("Initialize settings");
    
        this.settings.forEach((value, key) => {
          if (key !== "mount" && key !== "componentsScan") {
              $log.info(`settings.${key} =>`, value);
          } 
        });
    
        $log.info("Build services");
    
        return this.injector.load();
    }
    
    protected async loadMiddlewares(): Promise<any> {
        
        $log.debug("Mount middlewares");
      
        this.use(JLogIncomingRequest);
        
        await this.callHook("$onMountingMiddlewares", undefined, this.expressApp);
        
        await this.injector.emit("$beforeRoutesInit");

        await this.injector.emit("$onRoutesInit", this._components);
      
        delete this._components; // free memory
       
        await this.injector.emit("$afterRoutesInit");
      
        await this.callHook("$afterRoutesInit", undefined, this.expressApp);
      
        // Import the globalErrorHandler
        this.use(GlobalErrorHandlerMiddleware);

    }

    private async startServers(): Promise<any> {
        const promises: Promise<any>[] = [];
    
        /* istanbul ignore else */
        if ((this.settings.httpPort as any) !== false) {
          const settings = this.settings.getHttpPort();
          promises.push(
            this.startServer(this.httpServer, {https: false, ...settings}).then(settings => {
              this.settings.setHttpPort(settings);
            })
          );
        }
    
        /* istanbul ignore else */
        if ((this.settings.httpsPort as any) !== false) {
          const settings = this.settings.getHttpsPort();
          promises.push(
            this.startServer(this.httpsServer, {https: true, ...settings}).then(settings => {
              this.settings.setHttpsPort(settings);
            })
          );
        }
    
        return Promise.all<any>(promises);
    }

    protected startServer(
        http: Http.Server | Https.Server,
        settings: {https: boolean; address: string | number; port: number}
      ): Promise<{address: string; port: number}> {
        const {address, port, https} = settings;
    
        $log.debug(`Start server on ${https ? "https" : "http"}://${settings.address}:${settings.port}`);
        const promise = new Promise((resolve, reject) => {
          http.on("listening", resolve).on("error", reject);
        }).then(() => {
          const port = (http.address() as AddressInfo).port;
          $log.info(`HTTP Server listen on ${https ? "https" : "http"}://${settings.address}:${port}`);
    
          return {address: settings.address as string, port};
        });
    
        http.listen(port, address as any);
    
        return promise;
    }

    
    public async start(): Promise<any> {
        const start = new Date();
        try {
          const debug = this.settings.debug;
    
          /* istanbul ignore next */
          if (debug && this.settings.env !== "test") {
            $log.level = "debug";
          }

          this.loadStatic(this.expressApp);
          await this.callHook("$onInit");
          await this.loadSettingsAndInjector();
    
          $log.debug("Settings and injector loaded");
    
          await this.loadMiddlewares();
          await this.startServers();
          await this.callHook("$onReady");
    
          await this.injector.emit("$onServerReady");
    
          $log.info(`Started in ${new Date().getTime() - start.getTime()} ms`);
        } catch (err) {
          this.callHook("$onServerInitError", undefined, err);
    
          return Promise.reject(err);
        }
    }


    public use(...args: any[]): JServerLoader {
        this.expressApp.use(...args);

        return this;
    }

    public set(setting: string, val: any): JServerLoader {
        this.expressApp.set(setting, val);

        return this;
    }

    public engine(ext: string, fn: Function): JServerLoader {
        this.expressApp.engine(ext, fn);

        return this;
    }
   
    get settings(): ServerSettingsService {
        return this.injector.settings;
    }

    get expressApp(): Express.Application {
        return this.injector.get<ExpressApplication>(ExpressApplication)!;
    }

    get injectorService(): InjectorService {
        return this._injector;
    }

    get injector(): InjectorService {
    return this._injector;
    }

    get httpServer(): Http.Server {
        return this.injectorService.get<HttpServer>(HttpServer)!;
    }

    get httpsServer(): Https.Server {
        return this.injectorService.get<HttpsServer>(HttpsServer)!;
    }

    $register(): any { 
        return null;
    }
}