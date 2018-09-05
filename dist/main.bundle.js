/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty = __webpack_require__(/*! babel-runtime/core-js/object/define-property */ "babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ "babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = _promise2.default))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! @tsed/multipartfiles */ "@tsed/multipartfiles");
const ts_log_debug_1 = __webpack_require__(/*! ts-log-debug */ "ts-log-debug");
const jServerLoader_1 = __webpack_require__(/*! lib/@jj-tsed/common/jServerLoader */ "./src/lib/@jj-tsed/common/jServerLoader.ts");
const cors = __webpack_require__(/*! cors */ "cors");
// multer
const config_1 = __webpack_require__(/*! config */ "config");
const common_1 = __webpack_require__(/*! @tsed/common */ "@tsed/common");
const _jj_aws_multer_1 = __webpack_require__(/*! lib/@jj-aws-multer */ "./src/lib/@jj-aws-multer/index.ts");
let App = class App extends jServerLoader_1.JServerLoader {
    $onMountingMiddlewares() {
        const bodyParser = __webpack_require__(/*! body-parser */ "body-parser"),
              compress = __webpack_require__(/*! compression */ "compression"),
              methodOverride = __webpack_require__(/*! method-override */ "method-override");
        this.use(compress({})).use(methodOverride()).use(bodyParser.json()).use(bodyParser.urlencoded({
            extended: true
        })).use(cors());
        return null;
    }
    $onReady() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //const { entities, subscribers, migrations, ...others} = database;
                //const dbConfig = {entities:Object.keys(dbmodel).map(x=>dbmodel[x]), ...others};
                //await createConnection(dbConfig);
                ts_log_debug_1.$log.debug("Server initialized");
            } catch (exception) {
                throw new Error(exception);
            }
        });
    }
    $onServerInitError(error) {
        ts_log_debug_1.$log.error("Server encounter an error =>", error);
    }
};
App = __decorate([common_1.ServerSettings({
    "multer": {
        "storage": new _jj_aws_multer_1.AwsMulterStorage(config_1.aws.bucket, config_1.aws.accessKey, config_1.aws.secretAccessKey)
    }
})], App);
exports.App = App;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const ts_log_debug_1 = __webpack_require__(/*! ts-log-debug */ "ts-log-debug");
const app_1 = __webpack_require__(/*! ./app */ "./src/app.ts");
ts_log_debug_1.$log.debug("Start server...");
new app_1.App().load().then(x => {
    x.start().catch(err => {
        ts_log_debug_1.$log.error(err);
    });
});

/***/ }),

/***/ "./src/lib/@jj-aws-multer/index.ts":
/*!*****************************************!*\
  !*** ./src/lib/@jj-aws-multer/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __webpack_require__(/*! aws-sdk */ "aws-sdk");
const ts_httpexceptions_1 = __webpack_require__(/*! ts-httpexceptions */ "ts-httpexceptions");
class AwsMulterStorage {
    constructor(bucket, accessKey, secretAccessKey) {
        this.currentSize = 0;
        this.bucket = "";
        aws_sdk_1.config.update({
            accessKeyId: accessKey,
            secretAccessKey: secretAccessKey
        });
        this.bucket = bucket;
    }
    _handleFile(req, file, cb) {
        try {
            const aws = new aws_sdk_1.S3();
            const formattedFileName = `${Date.now()}_${file.originalname}`;
            const upload = aws.upload({
                Bucket: this.bucket,
                Key: formattedFileName,
                Body: file.stream,
                ACL: 'public-read'
            });
            const self = this;
            upload.on('httpUploadProgress', function (ev) {
                if (ev.total) self.currentSize = ev.total;
            });
            upload.send((err, result) => {
                if (err) {
                    console.log("ERRROR", err);
                    cb(new ts_httpexceptions_1.InternalServerError(err));
                }
                cb(null, {
                    size: self.currentSize,
                    filename: formattedFileName,
                    etag: result.ETag,
                    versionId: result.VersionId,
                    location: result.Location
                });
            });
        } catch (exception) {
            console.log(exception);
            cb(new ts_httpexceptions_1.InternalServerError(exception));
        }
    }
    _removeFile(req, file, cb) {
        try {
            const aws = new aws_sdk_1.S3();
            aws.deleteObject({
                Bucket: this.bucket,
                Key: file.originalname
            }, (err, data) => {
                if (err) {
                    cb(new ts_httpexceptions_1.InternalServerError(err));
                }
                cb(null);
            });
        } catch (exception) {
            cb(new ts_httpexceptions_1.InternalServerError(exception));
        }
    }
}
exports.AwsMulterStorage = AwsMulterStorage;

/***/ }),

/***/ "./src/lib/@jj-tsed/common/jLogIncomingRequest.ts":
/*!********************************************************!*\
  !*** ./src/lib/@jj-tsed/common/jLogIncomingRequest.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _setImmediate2 = __webpack_require__(/*! babel-runtime/core-js/set-immediate */ "babel-runtime/core-js/set-immediate");

var _setImmediate3 = _interopRequireDefault(_setImmediate2);

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _metadata = __webpack_require__(/*! babel-runtime/core-js/reflect/metadata */ "babel-runtime/core-js/reflect/metadata");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__(/*! babel-runtime/core-js/object/define-property */ "babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ "babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var JLogIncomingRequest_1;
const core_1 = __webpack_require__(/*! @tsed/core */ "@tsed/core");
const Express = __webpack_require__(/*! express */ "express");
const ts_log_debug_1 = __webpack_require__(/*! ts-log-debug */ "ts-log-debug");
const common_1 = __webpack_require__(/*! @tsed/common */ "@tsed/common");
/**
 * @private
 * @middleware
 */
let JLogIncomingRequest = JLogIncomingRequest_1 = class JLogIncomingRequest {
    // tslint:disable-next-line: no-unused-variable
    constructor(serverSettingsService) {
        this.AUTO_INCREMENT_ID = 1;
        this.loggerSettings = serverSettingsService.logger;
        this.reqIdBuilder = this.loggerSettings.reqIdBuilder || (() => this.AUTO_INCREMENT_ID++);
        this.fields = this.loggerSettings.requestFields || JLogIncomingRequest_1.DEFAULT_FIELDS;
        this.debug = serverSettingsService.debug;
    }
    /**
     * Handle the request.
     * @param {e.Request} request
     * @param {e.Response} response
     */
    use(request, response) {
        this.configureRequest(request);
        this.onLogStart(request);
        core_1.applyBefore(response, "end", () => this.onLogEnd(request, response));
    }
    /**
     * The separate onLogStart() function will allow developer to overwrite the initial request log.
     * @param {e.Request} request
     */
    onLogStart(request) {
        request.log.debug({ event: "start" });
    }
    /**
     * Attach all informations that will be necessary to log the request. Attach a new `request.log` object.
     * @param request
     */
    configureRequest(request) {
        request.id = String(request.id ? request.id : this.reqIdBuilder());
        request.tsedReqStart = new Date();
        // const {ignoreUrlPatterns = []} = this.loggerSettings;
        const ignoreUrlPatterns = [];
        const regs = ignoreUrlPatterns.map(pattern => typeof pattern === "string" ? new RegExp(pattern, "gi") : pattern);
        const verbose = req => this.requestToObject(req);
        const info = req => this.minimalRequestPicker(req);
        const run = cb => {
            const match = regs.find(reg => !!request.url.match(reg));
            return !match && cb();
        };
        request.log = {
            info: obj => run(() => ts_log_debug_1.$log.info(this.stringify(request, info)(obj))),
            debug: obj => run(() => ts_log_debug_1.$log.debug(this.stringify(request, verbose)(obj))),
            warn: obj => run(() => ts_log_debug_1.$log.warn(this.stringify(request, verbose)(obj))),
            error: obj => run(() => ts_log_debug_1.$log.error(this.stringify(request, verbose)(obj))),
            trace: obj => run(() => ts_log_debug_1.$log.trace(this.stringify(request, verbose)(obj)))
        };
    }
    /**
     * Return complete request info.
     * @param request
     * @returns {Object}
     */
    requestToObject(request) {
        return {
            reqId: request.id,
            method: request.method,
            url: request.originalUrl || request.url,
            duration: this.getDuration(request),
            headers: request.headers,
            body: request.body,
            query: request.query,
            params: request.params
        };
    }
    /**
     * Return a filtered request from global configuration.
     * @param request
     * @returns {Object}
     */
    minimalRequestPicker(request) {
        const info = this.requestToObject(request);
        return this.fields.reduce((acc, key) => {
            acc[key] = info[key];
            return acc;
        }, {});
    }
    /**
     * Return the duration between the time when LogIncomingRequest has handle the request and now.
     * @param request
     * @returns {number}
     */
    getDuration(request) {
        return new Date().getTime() - request.tsedReqStart.getTime();
    }
    /**
     * Stringify a request to JSON.
     * @param request
     * @param propertySelector
     * @returns {(scope: any) => string}
     */
    stringify(request, propertySelector) {
        return (scope = {}) => {
            if (typeof scope === "string") {
                scope = { message: scope };
            }
            scope = (0, _assign2.default)(scope, propertySelector(request));
            try {
                return (0, _stringify2.default)(scope, null, this.loggerSettings.jsonIndentation);
            } catch (er) {
                ts_log_debug_1.$log.error({ error: er });
            }
            return "";
        };
    }
    /**
     * Called when the `request.end()` is called by Express.
     * @param request
     * @param response
     */
    onLogEnd(request, response) {
        (0, _setImmediate3.default)(() => {
            /* istanbul ignore else */
            if (request.id) {
                if (this.loggerSettings.logRequest) {
                    request.log.info({ status: response.statusCode });
                }
                if (this.debug) {
                    request.log.debug({
                        status: response.statusCode,
                        data: request.getStoredData && request.getStoredData()
                    });
                }
                this.cleanRequest(request);
            }
        });
    }
    /**
     * Remove all data that added with `LogIncomingRequest.configureRequest()`.
     * @param request
     */
    cleanRequest(request) {
        delete request.id;
        delete request.tagId;
        delete request.tsedReqStart;
        request.log = {
            info: () => {},
            debug: () => {},
            warn: () => {},
            error: () => {},
            trace: () => {}
        };
    }
};
JLogIncomingRequest.DEFAULT_FIELDS = ["reqId", "method", "url", "duration"];
__decorate([__param(0, common_1.Req()), __param(1, common_1.Res()), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object]), __metadata("design:returntype", void 0)], JLogIncomingRequest.prototype, "use", null);
JLogIncomingRequest = JLogIncomingRequest_1 = __decorate([common_1.Middleware(), __metadata("design:paramtypes", [common_1.ServerSettingsService])], JLogIncomingRequest);
exports.JLogIncomingRequest = JLogIncomingRequest;

/***/ }),

/***/ "./src/lib/@jj-tsed/common/jServerLoader.ts":
/*!**************************************************!*\
  !*** ./src/lib/@jj-tsed/common/jServerLoader.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ "babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _getOwnPropertySymbols = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-symbols */ "babel-runtime/core-js/object/get-own-property-symbols");

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = _promise2.default))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof _getOwnPropertySymbols2.default === "function") for (var i = 0, p = (0, _getOwnPropertySymbols2.default)(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Http = __webpack_require__(/*! http */ "http");
const Https = __webpack_require__(/*! https */ "https");
const config = __webpack_require__(/*! config */ "config");
const Express = __webpack_require__(/*! express */ "express");
const ts_log_debug_1 = __webpack_require__(/*! ts-log-debug */ "ts-log-debug");
const core_1 = __webpack_require__(/*! @tsed/core */ "@tsed/core");
const jLogIncomingRequest_1 = __webpack_require__(/*! ./jLogIncomingRequest */ "./src/lib/@jj-tsed/common/jLogIncomingRequest.ts");
const common_1 = __webpack_require__(/*! @tsed/common */ "@tsed/common");
const webpack_chunk_index_1 = __webpack_require__(/*! webpack.chunk.index */ "./webpack.chunk.index.js");
class JServerLoader {
    constructor() {
        this.version = "0.0.0-PLACEHOLDER";
        this._components = [];
        this._scannedPromises = [];
        this.callHook = (key, elseFn = new Function(), ...args) => {
            const self = this;
            if (key in this) {
                ts_log_debug_1.$log.debug(`\x1B[1mCall hook ${key}\x1B[22m`);
                return self[key](...args);
            }
            return elseFn();
        };
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this._injector = new common_1.InjectorService();
            this.createExpressApplication();
            if (this.$onAuth) {
                ts_log_debug_1.$log.warn("The $onAuth hooks is removed. Use OverrideMiddleware method instead of. See https://goo.gl/fufBTE.");
            }
            yield this.init();
            return this;
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            // get config from file or from decorators
            const webconfig = core_1.Metadata.get("tsed:server:settings", this);
            const _a = config.server,
                  { mount } = _a,
                  others = __rest(_a, ["mount"]);
            // merge config
            core_1.Metadata.set("tsed:server:settings", (0, _assign2.default)({}, others, webconfig), this);
            const settings = common_1.ServerSettingsService.getMetadata(this);
            this.settings.set(settings);
            // registering middlewares,services,controllers,filters
            for (let i = 0; i < webpack_chunk_index_1.default.length; i++) {
                (0, _keys2.default)(webpack_chunk_index_1.default[i]).map(key => {
                    if (key.indexOf('endpoints') == 0) {
                        webpack_chunk_index_1.default[i][key].forEach(t => {
                            (0, _keys2.default)(t).forEach(innerKey => {
                                this.register(t[innerKey], innerKey.replace(/_/g, "/"));
                            });
                        });
                    } else {
                        this.register(webpack_chunk_index_1.default[i][key]);
                    }
                });
            }
            // starting server
            if (this.settings.get("env") === "test") {
                ts_log_debug_1.$log.stop();
            }
            const bind = (property, value, map) => {
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
                            this.createHttpsServer((0, _assign2.default)(map.get("httpsOptions") || {}, { port: value }));
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
        });
    }
    createExpressApplication() {
        const expressApp = Express();
        const originalUse = expressApp.use;
        const injector = this.injector;
        expressApp.use = function (...args) {
            args = args.map(arg => {
                if (injector.has(arg)) {
                    arg = common_1.HandlerBuilder.from(arg).build(injector);
                }
                return arg;
            });
            return originalUse.call(this, ...args);
        };
        this.injector.forkProvider(common_1.ExpressApplication, expressApp);
        return this;
    }
    createHttpServer(port) {
        const httpServer = Http.createServer(this.expressApp);
        // TODO to be removed
        /* istanbul ignore next */
        httpServer.get = () => httpServer;
        this.injector.forkProvider(common_1.HttpServer, httpServer);
        this.settings.httpPort = port;
        return this;
    }
    createHttpsServer(options) {
        const httpsServer = Https.createServer(options, this.expressApp);
        // TODO to be removed
        /* istanbul ignore next */
        httpsServer.get = () => httpsServer;
        this.injector.forkProvider(common_1.HttpsServer, httpsServer);
        this.settings.httpsPort = options.port;
        return this;
    }
    register(instance, endpoint) {
        (0, _keys2.default)(instance).forEach(x => {
            if (endpoint) {
                this.addControllers(endpoint, { x: instance[x] });
            } else {
                this.addComponents({ x: instance[x] });
            }
        });
    }
    addControllers(endpoint, controllers) {
        return this.addComponents(controllers, { endpoint });
    }
    addComponents(classes, options = {}) {
        classes = (0, _keys2.default)(classes).map(key => classes[key]).filter(clazz => core_1.isClass(clazz));
        const components = (0, _assign2.default)(options, { classes });
        this._components = (this._components || []).concat([components]).filter(o => !!o);
        return this;
    }
    loadStatic(expressApp) {
        expressApp.use("/public", Express.static('/home/payfazz117/Documents/projects/src/tsed-start-kit-test/dist/public'));
    }
    loadSettingsAndInjector() {
        return __awaiter(this, void 0, void 0, function* () {
            ts_log_debug_1.$log.debug("Initialize settings");
            this.settings.forEach((value, key) => {
                if (key !== "mount" && key !== "componentsScan") {
                    ts_log_debug_1.$log.info(`settings.${key} =>`, value);
                }
            });
            ts_log_debug_1.$log.info("Build services");
            return this.injector.load();
        });
    }
    loadMiddlewares() {
        return __awaiter(this, void 0, void 0, function* () {
            ts_log_debug_1.$log.debug("Mount middlewares");
            this.use(jLogIncomingRequest_1.JLogIncomingRequest);
            yield this.callHook("$onMountingMiddlewares", undefined, this.expressApp);
            yield this.injector.emit("$beforeRoutesInit");
            yield this.injector.emit("$onRoutesInit", this._components);
            delete this._components; // free memory
            yield this.injector.emit("$afterRoutesInit");
            yield this.callHook("$afterRoutesInit", undefined, this.expressApp);
            // Import the globalErrorHandler
            this.use(common_1.GlobalErrorHandlerMiddleware);
        });
    }
    startServers() {
        return __awaiter(this, void 0, void 0, function* () {
            const promises = [];
            /* istanbul ignore else */
            if (this.settings.httpPort !== false) {
                const settings = this.settings.getHttpPort();
                promises.push(this.startServer(this.httpServer, (0, _assign2.default)({ https: false }, settings)).then(settings => {
                    this.settings.setHttpPort(settings);
                }));
            }
            /* istanbul ignore else */
            if (this.settings.httpsPort !== false) {
                const settings = this.settings.getHttpsPort();
                promises.push(this.startServer(this.httpsServer, (0, _assign2.default)({ https: true }, settings)).then(settings => {
                    this.settings.setHttpsPort(settings);
                }));
            }
            return _promise2.default.all(promises);
        });
    }
    startServer(http, settings) {
        const { address, port, https } = settings;
        ts_log_debug_1.$log.debug(`Start server on ${https ? "https" : "http"}://${settings.address}:${settings.port}`);
        const promise = new _promise2.default((resolve, reject) => {
            http.on("listening", resolve).on("error", reject);
        }).then(() => {
            const port = http.address().port;
            ts_log_debug_1.$log.info(`HTTP Server listen on ${https ? "https" : "http"}://${settings.address}:${port}`);
            return { address: settings.address, port };
        });
        http.listen(port, address);
        return promise;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const start = new Date();
            try {
                const debug = this.settings.debug;
                /* istanbul ignore next */
                if (debug && this.settings.env !== "test") {
                    ts_log_debug_1.$log.level = "debug";
                }
                this.loadStatic(this.expressApp);
                yield this.callHook("$onInit");
                yield this.loadSettingsAndInjector();
                ts_log_debug_1.$log.debug("Settings and injector loaded");
                yield this.loadMiddlewares();
                yield this.startServers();
                yield this.callHook("$onReady");
                yield this.injector.emit("$onServerReady");
                ts_log_debug_1.$log.info(`Started in ${new Date().getTime() - start.getTime()} ms`);
            } catch (err) {
                this.callHook("$onServerInitError", undefined, err);
                return _promise2.default.reject(err);
            }
        });
    }
    use(...args) {
        this.expressApp.use(...args);
        return this;
    }
    set(setting, val) {
        this.expressApp.set(setting, val);
        return this;
    }
    engine(ext, fn) {
        this.expressApp.engine(ext, fn);
        return this;
    }
    get settings() {
        return this.injector.settings;
    }
    get expressApp() {
        return this.injector.get(common_1.ExpressApplication);
    }
    get injectorService() {
        return this._injector;
    }
    get injector() {
        return this._injector;
    }
    get httpServer() {
        return this.injectorService.get(common_1.HttpServer);
    }
    get httpsServer() {
        return this.injectorService.get(common_1.HttpsServer);
    }
    $register() {
        return null;
    }
}
exports.JServerLoader = JServerLoader;

/***/ }),

/***/ "./src/middlewares/index.ts":
/*!**********************************!*\
  !*** ./src/middlewares/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};

/***/ }),

/***/ "./src/routes/v0/home/controllers/index.ts":
/*!*************************************************!*\
  !*** ./src/routes/v0/home/controllers/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _metadata = __webpack_require__(/*! babel-runtime/core-js/reflect/metadata */ "babel-runtime/core-js/reflect/metadata");

var _metadata2 = _interopRequireDefault(_metadata);

var _defineProperty = __webpack_require__(/*! babel-runtime/core-js/object/define-property */ "babel-runtime/core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ "babel-runtime/core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = (0, _getOwnPropertyDescriptor2.default)(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && (0, _defineProperty2.default)(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if (typeof Reflect === "object" && typeof _metadata2.default === "function") return (0, _metadata2.default)(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = _promise2.default))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const multipartfiles_1 = __webpack_require__(/*! @tsed/multipartfiles */ "@tsed/multipartfiles");
const common_1 = __webpack_require__(/*! @tsed/common */ "@tsed/common");
const ts_httpexceptions_1 = __webpack_require__(/*! ts-httpexceptions */ "ts-httpexceptions");
let HomeController = class HomeController {
    create(file) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return file;
            } catch (exception) {
                throw new ts_httpexceptions_1.InternalServerError(exception);
            }
        });
    }
    createMultiple(files, params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let legends = params.split(',');
                if (legends.length != files.length) {
                    throw new ts_httpexceptions_1.BadRequest("array length of fileLegends should be the same as files");
                }
                return legends.map((x, i) => ({ [x]: files[i] }));
            } catch (exception) {
                throw new ts_httpexceptions_1.InternalServerError(exception);
            }
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("GEEET");
            return "hello";
        });
    }
};
__decorate([common_1.Post("/"), common_1.Status(200, { description: "success", type: String }), __param(0, multipartfiles_1.MultipartFile("file")), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", _promise2.default)], HomeController.prototype, "create", null);
__decorate([common_1.Put("/multiple"), common_1.Status(200, { description: "success", type: String }), __param(0, multipartfiles_1.MultipartFile("files", 4)), __param(1, common_1.BodyParams('fileLegends')), __metadata("design:type", Function), __metadata("design:paramtypes", [Array, String]), __metadata("design:returntype", _promise2.default)], HomeController.prototype, "createMultiple", null);
__decorate([common_1.Get("/"), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", _promise2.default)], HomeController.prototype, "get", null);
HomeController = __decorate([common_1.Controller("/home")], HomeController);
exports.HomeController = HomeController;

/***/ }),

/***/ "./src/routes/v0/index.ts":
/*!********************************!*\
  !*** ./src/routes/v0/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! routes/v0/home/controllers/index */ "./src/routes/v0/home/controllers/index.ts"));

/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {};

/***/ }),

/***/ "./webpack.chunk.index.js":
/*!********************************!*\
  !*** ./webpack.chunk.index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = __webpack_require__(/*! ./src/routes/v0 */ "./src/routes/v0/index.ts");

var _api_v0 = _interopRequireWildcard(_v);

var _middlewares = __webpack_require__(/*! ./src/middlewares */ "./src/middlewares/index.ts");

var middlewares = _interopRequireWildcard(_middlewares);

var _services = __webpack_require__(/*! ./src/services */ "./src/services/index.ts");

var services = _interopRequireWildcard(_services);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = [{ endpoints: [{ _api_v0: _api_v0 }] }, { middlewares: middlewares }, { services: services }];

/***/ }),

/***/ "@tsed/common":
/*!*******************************!*\
  !*** external "@tsed/common" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tsed/common");

/***/ }),

/***/ "@tsed/core":
/*!*****************************!*\
  !*** external "@tsed/core" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tsed/core");

/***/ }),

/***/ "@tsed/multipartfiles":
/*!***************************************!*\
  !*** external "@tsed/multipartfiles" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tsed/multipartfiles");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),

/***/ "babel-runtime/core-js/object/assign":
/*!******************************************************!*\
  !*** external "babel-runtime/core-js/object/assign" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),

/***/ "babel-runtime/core-js/object/define-property":
/*!***************************************************************!*\
  !*** external "babel-runtime/core-js/object/define-property" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/define-property");

/***/ }),

/***/ "babel-runtime/core-js/object/get-own-property-descriptor":
/*!***************************************************************************!*\
  !*** external "babel-runtime/core-js/object/get-own-property-descriptor" ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-own-property-descriptor");

/***/ }),

/***/ "babel-runtime/core-js/object/get-own-property-symbols":
/*!************************************************************************!*\
  !*** external "babel-runtime/core-js/object/get-own-property-symbols" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-own-property-symbols");

/***/ }),

/***/ "babel-runtime/core-js/object/keys":
/*!****************************************************!*\
  !*** external "babel-runtime/core-js/object/keys" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),

/***/ "babel-runtime/core-js/promise":
/*!************************************************!*\
  !*** external "babel-runtime/core-js/promise" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),

/***/ "babel-runtime/core-js/reflect/metadata":
/*!*********************************************************!*\
  !*** external "babel-runtime/core-js/reflect/metadata" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/reflect/metadata");

/***/ }),

/***/ "babel-runtime/core-js/set-immediate":
/*!******************************************************!*\
  !*** external "babel-runtime/core-js/set-immediate" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/set-immediate");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "config":
/*!*************************!*\
  !*** external "config" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("config");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "method-override":
/*!**********************************!*\
  !*** external "method-override" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("method-override");

/***/ }),

/***/ "ts-httpexceptions":
/*!************************************!*\
  !*** external "ts-httpexceptions" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ts-httpexceptions");

/***/ }),

/***/ "ts-log-debug":
/*!*******************************!*\
  !*** external "ts-log-debug" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ts-log-debug");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9AamotYXdzLW11bHRlci9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL0Bqai10c2VkL2NvbW1vbi9qTG9nSW5jb21pbmdSZXF1ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvQGpqLXRzZWQvY29tbW9uL2pTZXJ2ZXJMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21pZGRsZXdhcmVzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvdjAvaG9tZS9jb250cm9sbGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL3YwL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrLmNodW5rLmluZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB0c2VkL2NvbW1vblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB0c2VkL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAdHNlZC9tdWx0aXBhcnRmaWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF3cy1zZGtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktc3ltYm9sc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL3JlZmxlY3QvbWV0YWRhdGFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvc2V0LWltbWVkaWF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29tcHJlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1ldGhvZC1vdmVycmlkZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRzLWh0dHBleGNlcHRpb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidHMtbG9nLWRlYnVnXCIiXSwibmFtZXMiOlsiX2FwaV92MCIsIm1pZGRsZXdhcmVzIiwic2VydmljZXMiLCJlbmRwb2ludHMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFF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LEcsd0JBQUEsRSxLQUFBLEVBR0MsSUFIRDtBQTVCUyxpQkFBYyxZQUYxQixvQkFBVyxPQUFYLENBRTBCLEdBQWQsY0FBYyxDQUFkO0FBQUEsd0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCYixtSDs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsa0JBQWUsRUFBZixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7SUFBWUEsTzs7QUFDWjs7SUFBWUMsVzs7QUFDWjs7SUFBWUMsUTs7OztrQkFDRyxDQUFDLEVBQUNDLFdBQVUsQ0FBQyxFQUFDSCxTQUFRQSxPQUFULEVBQUQsQ0FBWCxFQUFELEVBQWtDLEVBQUNDLGFBQVlBLFdBQWIsRUFBbEMsRUFBNEQsRUFBQ0MsVUFBU0EsUUFBVixFQUE1RCxDOzs7Ozs7Ozs7OztBQ0hmLHlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLGlFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLHFGOzs7Ozs7Ozs7OztBQ0FBLGtGOzs7Ozs7Ozs7OztBQ0FBLDhEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgXCJAdHNlZC9tdWx0aXBhcnRmaWxlc1wiO1xuaW1wb3J0IHskbG9nfSBmcm9tIFwidHMtbG9nLWRlYnVnXCI7XG5pbXBvcnQge0pTZXJ2ZXJMb2FkZXJ9IGZyb20gXCJsaWIvQGpqLXRzZWQvY29tbW9uL2pTZXJ2ZXJMb2FkZXJcIjtcblxuaW1wb3J0ICogYXMgY29ycyBmcm9tIFwiY29yc1wiO1xuXG4vLyBtdWx0ZXJcbmltcG9ydCB7IGF3cyB9IGZyb20gXCJjb25maWdcIlxuXG4vLyBkYXRhYmFzZSBcbmltcG9ydCB7IGRhdGFiYXNlIH0gZnJvbSBcImNvbmZpZ1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29ubmVjdGlvbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgeyBTZXJ2ZXJTZXR0aW5ncyB9IGZyb20gXCJAdHNlZC9jb21tb25cIjtcbmltcG9ydCB7IEF3c011bHRlclN0b3JhZ2UgfSBmcm9tIFwibGliL0Bqai1hd3MtbXVsdGVyXCI7XG5pbXBvcnQgKiBhcyBkYm1vZGVsIGZyb20gXCJlbnRpdGllc1wiO1xuXG5AU2VydmVyU2V0dGluZ3Moe1xuICAgIFwibXVsdGVyXCI6IHtcbiAgICAgICAgXCJzdG9yYWdlXCI6IG5ldyBBd3NNdWx0ZXJTdG9yYWdlKFxuICAgICAgICAgICAgYXdzLmJ1Y2tldCxcbiAgICAgICAgICAgIGF3cy5hY2Nlc3NLZXksXG4gICAgICAgICAgICBhd3Muc2VjcmV0QWNjZXNzS2V5XG4gICAgICAgIClcbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIEFwcCBleHRlbmRzIEpTZXJ2ZXJMb2FkZXIge1xuICAgICRvbk1vdW50aW5nTWlkZGxld2FyZXMoKTogdm9pZCB8IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIiksXG4gICAgICAgICAgICBjb21wcmVzcyA9IHJlcXVpcmUoXCJjb21wcmVzc2lvblwiKSxcbiAgICAgICAgICAgIG1ldGhvZE92ZXJyaWRlID0gcmVxdWlyZShcIm1ldGhvZC1vdmVycmlkZVwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXNcbiAgICAgICAgICAgIC51c2UoY29tcHJlc3Moe30pKVxuICAgICAgICAgICAgLnVzZShtZXRob2RPdmVycmlkZSgpKVxuICAgICAgICAgICAgLnVzZShib2R5UGFyc2VyLmpzb24oKSlcbiAgICAgICAgICAgIC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHtcbiAgICAgICAgICAgICAgICBleHRlbmRlZDogdHJ1ZVxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAudXNlKGNvcnMoKSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jICRvblJlYWR5KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy9jb25zdCB7IGVudGl0aWVzLCBzdWJzY3JpYmVycywgbWlncmF0aW9ucywgLi4ub3RoZXJzfSA9IGRhdGFiYXNlO1xuICAgICAgICAgICAgLy9jb25zdCBkYkNvbmZpZyA9IHtlbnRpdGllczpPYmplY3Qua2V5cyhkYm1vZGVsKS5tYXAoeD0+ZGJtb2RlbFt4XSksIC4uLm90aGVyc307XG4gICAgICAgICAgICAvL2F3YWl0IGNyZWF0ZUNvbm5lY3Rpb24oZGJDb25maWcpO1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNlcnZlciBpbml0aWFsaXplZFwiKTtcbiAgICAgICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXhjZXB0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICAkb25TZXJ2ZXJJbml0RXJyb3IoZXJyb3IpOiBhbnkge1xuICAgICAgICAkbG9nLmVycm9yKFwiU2VydmVyIGVuY291bnRlciBhbiBlcnJvciA9PlwiLCBlcnJvcik7XG4gICAgfVxufSIsImltcG9ydCB7JGxvZ30gZnJvbSBcInRzLWxvZy1kZWJ1Z1wiO1xuaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vYXBwXCI7XG5cbiRsb2cuZGVidWcoXCJTdGFydCBzZXJ2ZXIuLi5cIik7XG5uZXcgQXBwKCkubG9hZCgpLnRoZW4oICh4KSA9PntcbiAgICB4LnN0YXJ0KClcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAkbG9nLmVycm9yKGVycik7XG4gICAgfSk7XG59KTsiLCJcbmltcG9ydCB7IFMzLCBjb25maWcgYXMgYXdzQ29uZmlnIH0gZnJvbSBcImF3cy1zZGtcIjtcbmltcG9ydCB7IEludGVybmFsU2VydmVyRXJyb3IgfSBmcm9tIFwidHMtaHR0cGV4Y2VwdGlvbnNcIjtcbmltcG9ydCB7IFN0b3JhZ2VFbmdpbmUgfSBmcm9tIFwibXVsdGVyXCI7XG5pbXBvcnQgeyBBd3NGaWxlIH0gZnJvbSBcImxpYi9AamotYXdzLW11bHRlci9pbnRlcmZhY2UvYXdzRmlsZVwiO1xuXG5leHBvcnQgY2xhc3MgQXdzTXVsdGVyU3RvcmFnZSBpbXBsZW1lbnRzIFN0b3JhZ2VFbmdpbmUge1xuICAgIGN1cnJlbnRTaXplID0gMDtcbiAgICBidWNrZXQgPSBcIlwiO1xuICAgIGNvbnN0cnVjdG9yKGJ1Y2tldDpzdHJpbmcsIGFjY2Vzc0tleTpzdHJpbmcsIHNlY3JldEFjY2Vzc0tleTpzdHJpbmcpIHtcbiAgICAgICBhd3NDb25maWcudXBkYXRlKHtcbiAgICAgICAgICAgIGFjY2Vzc0tleUlkOiBhY2Nlc3NLZXkgLFxuICAgICAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiBzZWNyZXRBY2Nlc3NLZXlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnVja2V0ID1idWNrZXQ7XG4gICAgfVxuICAgIFxuICAgIF9oYW5kbGVGaWxlKHJlcTogRXhwcmVzcy5SZXF1ZXN0LCBmaWxlOiBFeHByZXNzLk11bHRlci5GaWxlLCBjYjogKGVycm9yPzogYW55LCBpbmZvPzogQXdzRmlsZSkgPT4gdm9pZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYXdzID0gbmV3IFMzKCk7XG4gICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRGaWxlTmFtZSA9IGAke0RhdGUubm93KCl9XyR7ZmlsZS5vcmlnaW5hbG5hbWV9YDtcbiAgICAgICAgICAgIGNvbnN0IHVwbG9hZCA9IGF3cy51cGxvYWQoe1xuICAgICAgICAgICAgICAgIEJ1Y2tldDogdGhpcy5idWNrZXQsXG4gICAgICAgICAgICAgICAgS2V5OiBmb3JtYXR0ZWRGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBCb2R5OiAoZmlsZSBhcyBhbnkpLnN0cmVhbSxcbiAgICAgICAgICAgICAgICBBQ0w6ICdwdWJsaWMtcmVhZCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB1cGxvYWQub24oJ2h0dHBVcGxvYWRQcm9ncmVzcycsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgICAgIGlmIChldi50b3RhbCkgc2VsZi5jdXJyZW50U2l6ZSA9IGV2LnRvdGFsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdXBsb2FkLnNlbmQoKGVycjphbnkscmVzdWx0OmFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUlJPUlwiLGVycik7XG4gICAgICAgICAgICAgICAgICAgIGNiKG5ldyBJbnRlcm5hbFNlcnZlckVycm9yKGVycikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjYihcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogc2VsZi5jdXJyZW50U2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVuYW1lOiBmb3JtYXR0ZWRGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV0YWc6IHJlc3VsdC5FVGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbklkOiByZXN1bHQuVmVyc2lvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHJlc3VsdC5Mb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICB9IGFzIEF3c0ZpbGVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICBcbiAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4Y2VwdGlvbik7XG4gICAgICAgICAgICBjYihuZXcgSW50ZXJuYWxTZXJ2ZXJFcnJvcihleGNlcHRpb24pKTtcbiAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIF9yZW1vdmVGaWxlKHJlcTogRXhwcmVzcy5SZXF1ZXN0LCBmaWxlOiBFeHByZXNzLk11bHRlci5GaWxlLCBjYjogKGVycm9yOiBFcnJvcikgPT4gdm9pZCkge1xuICAgICAgICB0cnkgeyBcbiAgICAgICAgICAgIGNvbnN0IGF3cyA9IG5ldyBTMygpO1xuICAgICAgICAgICAgYXdzLmRlbGV0ZU9iamVjdChcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIEJ1Y2tldDogdGhpcy5idWNrZXQsXG4gICAgICAgICAgICAgICAgICAgIEtleTogZmlsZS5vcmlnaW5hbG5hbWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnI6YW55LCBkYXRhOmFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKG5ldyBJbnRlcm5hbFNlcnZlckVycm9yKGVycikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNiKG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgfSBjYXRjaChleGNlcHRpb24pIHtcbiAgICAgICAgICAgIGNiKG5ldyBJbnRlcm5hbFNlcnZlckVycm9yKGV4Y2VwdGlvbikpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7YXBwbHlCZWZvcmV9IGZyb20gXCJAdHNlZC9jb3JlXCI7XG5pbXBvcnQgKiBhcyBFeHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyRsb2d9IGZyb20gXCJ0cy1sb2ctZGVidWdcIjtcblxuaW1wb3J0IHtcbiAgICBJTG9nZ2VyU2V0dGluZ3MsXG4gICAgSU1pZGRsZXdhcmUsXG4gICAgU2VydmVyU2V0dGluZ3NTZXJ2aWNlLFxuICAgIFJlcSxcbiAgICBSZXMsXG4gICAgTWlkZGxld2FyZVxufSBmcm9tIFwiQHRzZWQvY29tbW9uXCI7XG5cbi8qKlxuICogQHByaXZhdGVcbiAqIEBtaWRkbGV3YXJlXG4gKi9cbkBNaWRkbGV3YXJlKClcbmV4cG9ydCBjbGFzcyBKTG9nSW5jb21pbmdSZXF1ZXN0IGltcGxlbWVudHMgSU1pZGRsZXdhcmUge1xuICBwcml2YXRlIHN0YXRpYyBERUZBVUxUX0ZJRUxEUyA9IFtcInJlcUlkXCIsIFwibWV0aG9kXCIsIFwidXJsXCIsIFwiZHVyYXRpb25cIl07XG5cbiAgcHJpdmF0ZSBBVVRPX0lOQ1JFTUVOVF9JRCA9IDE7XG4gIHByaXZhdGUgbG9nZ2VyU2V0dGluZ3M6IElMb2dnZXJTZXR0aW5ncztcbiAgcHJpdmF0ZSBmaWVsZHM6IHN0cmluZ1tdO1xuICBwcml2YXRlIHJlcUlkQnVpbGRlcjogKCkgPT4gbnVtYmVyO1xuICBwcml2YXRlIGRlYnVnOiBib29sZWFuO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW51c2VkLXZhcmlhYmxlXG4gIGNvbnN0cnVjdG9yKHNlcnZlclNldHRpbmdzU2VydmljZTogU2VydmVyU2V0dGluZ3NTZXJ2aWNlKSB7XG4gICAgdGhpcy5sb2dnZXJTZXR0aW5ncyA9IHNlcnZlclNldHRpbmdzU2VydmljZS5sb2dnZXIgYXMgSUxvZ2dlclNldHRpbmdzO1xuICAgIHRoaXMucmVxSWRCdWlsZGVyID0gdGhpcy5sb2dnZXJTZXR0aW5ncy5yZXFJZEJ1aWxkZXIgfHwgKCgpID0+IHRoaXMuQVVUT19JTkNSRU1FTlRfSUQrKyk7XG4gICAgdGhpcy5maWVsZHMgPSB0aGlzLmxvZ2dlclNldHRpbmdzLnJlcXVlc3RGaWVsZHMgfHwgSkxvZ0luY29taW5nUmVxdWVzdC5ERUZBVUxUX0ZJRUxEUztcbiAgICB0aGlzLmRlYnVnID0gc2VydmVyU2V0dGluZ3NTZXJ2aWNlLmRlYnVnO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZSB0aGUgcmVxdWVzdC5cbiAgICogQHBhcmFtIHtlLlJlcXVlc3R9IHJlcXVlc3RcbiAgICogQHBhcmFtIHtlLlJlc3BvbnNlfSByZXNwb25zZVxuICAgKi9cbiAgcHVibGljIHVzZShAUmVxKCkgcmVxdWVzdDogRXhwcmVzcy5SZXF1ZXN0LCBAUmVzKCkgcmVzcG9uc2U6IEV4cHJlc3MuUmVzcG9uc2UpOiB2b2lkIHtcbiAgICB0aGlzLmNvbmZpZ3VyZVJlcXVlc3QocmVxdWVzdCk7XG5cbiAgICB0aGlzLm9uTG9nU3RhcnQocmVxdWVzdCk7XG5cbiAgICBhcHBseUJlZm9yZShyZXNwb25zZSwgXCJlbmRcIiwgKCkgPT4gdGhpcy5vbkxvZ0VuZChyZXF1ZXN0LCByZXNwb25zZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBzZXBhcmF0ZSBvbkxvZ1N0YXJ0KCkgZnVuY3Rpb24gd2lsbCBhbGxvdyBkZXZlbG9wZXIgdG8gb3ZlcndyaXRlIHRoZSBpbml0aWFsIHJlcXVlc3QgbG9nLlxuICAgKiBAcGFyYW0ge2UuUmVxdWVzdH0gcmVxdWVzdFxuICAgKi9cbiAgcHJvdGVjdGVkIG9uTG9nU3RhcnQocmVxdWVzdDogRXhwcmVzcy5SZXF1ZXN0KSB7XG4gICAgcmVxdWVzdC5sb2cuZGVidWcoe2V2ZW50OiBcInN0YXJ0XCJ9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2ggYWxsIGluZm9ybWF0aW9ucyB0aGF0IHdpbGwgYmUgbmVjZXNzYXJ5IHRvIGxvZyB0aGUgcmVxdWVzdC4gQXR0YWNoIGEgbmV3IGByZXF1ZXN0LmxvZ2Agb2JqZWN0LlxuICAgKiBAcGFyYW0gcmVxdWVzdFxuICAgKi9cbiAgcHJvdGVjdGVkIGNvbmZpZ3VyZVJlcXVlc3QocmVxdWVzdDogRXhwcmVzcy5SZXF1ZXN0KSB7XG4gICAgcmVxdWVzdC5pZCA9IFN0cmluZyhyZXF1ZXN0LmlkID8gcmVxdWVzdC5pZCA6IHRoaXMucmVxSWRCdWlsZGVyKCkpO1xuICAgIHJlcXVlc3QudHNlZFJlcVN0YXJ0ID0gbmV3IERhdGUoKTtcblxuICAgIC8vIGNvbnN0IHtpZ25vcmVVcmxQYXR0ZXJucyA9IFtdfSA9IHRoaXMubG9nZ2VyU2V0dGluZ3M7XG4gICAgY29uc3QgaWdub3JlVXJsUGF0dGVybnMgPSBbXTtcbiAgICBcbiAgICBjb25zdCByZWdzID0gaWdub3JlVXJsUGF0dGVybnMubWFwKChwYXR0ZXJuOiBzdHJpbmcgfCBSZWdFeHApID0+ICh0eXBlb2YgcGF0dGVybiA9PT0gXCJzdHJpbmdcIiA/IG5ldyBSZWdFeHAocGF0dGVybiwgXCJnaVwiKSA6IHBhdHRlcm4pKTtcblxuICAgIGNvbnN0IHZlcmJvc2UgPSAocmVxOiBFeHByZXNzLlJlcXVlc3QpID0+IHRoaXMucmVxdWVzdFRvT2JqZWN0KHJlcSk7XG4gICAgY29uc3QgaW5mbyA9IChyZXE6IEV4cHJlc3MuUmVxdWVzdCkgPT4gdGhpcy5taW5pbWFsUmVxdWVzdFBpY2tlcihyZXEpO1xuXG4gICAgY29uc3QgcnVuID0gKGNiOiBGdW5jdGlvbikgPT4ge1xuICAgICAgY29uc3QgbWF0Y2ggPSByZWdzLmZpbmQocmVnID0+ICEhcmVxdWVzdC51cmwubWF0Y2gocmVnKSk7XG5cbiAgICAgIHJldHVybiAhbWF0Y2ggJiYgY2IoKTtcbiAgICB9O1xuXG4gICAgcmVxdWVzdC5sb2cgPSB7XG4gICAgICBpbmZvOiAob2JqOiBhbnkpID0+IHJ1bigoKSA9PiAkbG9nLmluZm8odGhpcy5zdHJpbmdpZnkocmVxdWVzdCwgaW5mbykob2JqKSkpLFxuICAgICAgZGVidWc6IChvYmo6IGFueSkgPT4gcnVuKCgpID0+ICRsb2cuZGVidWcodGhpcy5zdHJpbmdpZnkocmVxdWVzdCwgdmVyYm9zZSkob2JqKSkpLFxuICAgICAgd2FybjogKG9iajogYW55KSA9PiBydW4oKCkgPT4gJGxvZy53YXJuKHRoaXMuc3RyaW5naWZ5KHJlcXVlc3QsIHZlcmJvc2UpKG9iaikpKSxcbiAgICAgIGVycm9yOiAob2JqOiBhbnkpID0+IHJ1bigoKSA9PiAkbG9nLmVycm9yKHRoaXMuc3RyaW5naWZ5KHJlcXVlc3QsIHZlcmJvc2UpKG9iaikpKSxcbiAgICAgIHRyYWNlOiAob2JqOiBhbnkpID0+IHJ1bigoKSA9PiAkbG9nLnRyYWNlKHRoaXMuc3RyaW5naWZ5KHJlcXVlc3QsIHZlcmJvc2UpKG9iaikpKVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGNvbXBsZXRlIHJlcXVlc3QgaW5mby5cbiAgICogQHBhcmFtIHJlcXVlc3RcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIHByb3RlY3RlZCByZXF1ZXN0VG9PYmplY3QocmVxdWVzdDogRXhwcmVzcy5SZXF1ZXN0KTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVxSWQ6IHJlcXVlc3QuaWQsXG4gICAgICBtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuICAgICAgdXJsOiByZXF1ZXN0Lm9yaWdpbmFsVXJsIHx8IHJlcXVlc3QudXJsLFxuICAgICAgZHVyYXRpb246IHRoaXMuZ2V0RHVyYXRpb24ocmVxdWVzdCksXG4gICAgICBoZWFkZXJzOiByZXF1ZXN0LmhlYWRlcnMsXG4gICAgICBib2R5OiByZXF1ZXN0LmJvZHksXG4gICAgICBxdWVyeTogcmVxdWVzdC5xdWVyeSxcbiAgICAgIHBhcmFtczogcmVxdWVzdC5wYXJhbXNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIGZpbHRlcmVkIHJlcXVlc3QgZnJvbSBnbG9iYWwgY29uZmlndXJhdGlvbi5cbiAgICogQHBhcmFtIHJlcXVlc3RcbiAgICogQHJldHVybnMge09iamVjdH1cbiAgICovXG4gIHByb3RlY3RlZCBtaW5pbWFsUmVxdWVzdFBpY2tlcihyZXF1ZXN0OiBFeHByZXNzLlJlcXVlc3QpOiBhbnkge1xuICAgIGNvbnN0IGluZm8gPSB0aGlzLnJlcXVlc3RUb09iamVjdChyZXF1ZXN0KTtcblxuICAgIHJldHVybiB0aGlzLmZpZWxkcy5yZWR1Y2UoKGFjYzogYW55LCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgYWNjW2tleV0gPSBpbmZvW2tleV07XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgZHVyYXRpb24gYmV0d2VlbiB0aGUgdGltZSB3aGVuIExvZ0luY29taW5nUmVxdWVzdCBoYXMgaGFuZGxlIHRoZSByZXF1ZXN0IGFuZCBub3cuXG4gICAqIEBwYXJhbSByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0RHVyYXRpb24ocmVxdWVzdDogRXhwcmVzcy5SZXF1ZXN0KTogbnVtYmVyIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSByZXF1ZXN0LnRzZWRSZXFTdGFydC5nZXRUaW1lKCk7XG4gIH1cblxuICAvKipcbiAgICogU3RyaW5naWZ5IGEgcmVxdWVzdCB0byBKU09OLlxuICAgKiBAcGFyYW0gcmVxdWVzdFxuICAgKiBAcGFyYW0gcHJvcGVydHlTZWxlY3RvclxuICAgKiBAcmV0dXJucyB7KHNjb3BlOiBhbnkpID0+IHN0cmluZ31cbiAgICovXG4gIHByb3RlY3RlZCBzdHJpbmdpZnkocmVxdWVzdDogRXhwcmVzcy5SZXF1ZXN0LCBwcm9wZXJ0eVNlbGVjdG9yOiAoZTogRXhwcmVzcy5SZXF1ZXN0KSA9PiBhbnkpOiAoc2NvcGU6IGFueSkgPT4gc3RyaW5nIHtcbiAgICByZXR1cm4gKHNjb3BlOiBhbnkgPSB7fSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBzY29wZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBzY29wZSA9IHttZXNzYWdlOiBzY29wZX07XG4gICAgICB9XG4gICAgICBzY29wZSA9IE9iamVjdC5hc3NpZ24oc2NvcGUsIHByb3BlcnR5U2VsZWN0b3IocmVxdWVzdCkpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNjb3BlLCBudWxsLCB0aGlzLmxvZ2dlclNldHRpbmdzLmpzb25JbmRlbnRhdGlvbik7XG4gICAgICB9IGNhdGNoIChlcikge1xuICAgICAgICAkbG9nLmVycm9yKHtlcnJvcjogZXJ9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgYHJlcXVlc3QuZW5kKClgIGlzIGNhbGxlZCBieSBFeHByZXNzLlxuICAgKiBAcGFyYW0gcmVxdWVzdFxuICAgKiBAcGFyYW0gcmVzcG9uc2VcbiAgICovXG4gIHByb3RlY3RlZCBvbkxvZ0VuZChyZXF1ZXN0OiBFeHByZXNzLlJlcXVlc3QsIHJlc3BvbnNlOiBFeHByZXNzLlJlc3BvbnNlKSB7XG4gICAgc2V0SW1tZWRpYXRlKCgpID0+IHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocmVxdWVzdC5pZCkge1xuICAgICAgICBpZiAodGhpcy5sb2dnZXJTZXR0aW5ncy5sb2dSZXF1ZXN0KSB7XG4gICAgICAgICAgcmVxdWVzdC5sb2cuaW5mbyh7c3RhdHVzOiByZXNwb25zZS5zdGF0dXNDb2RlfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgICAgIHJlcXVlc3QubG9nLmRlYnVnKHtcbiAgICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzQ29kZSxcbiAgICAgICAgICAgIGRhdGE6IHJlcXVlc3QuZ2V0U3RvcmVkRGF0YSAmJiByZXF1ZXN0LmdldFN0b3JlZERhdGEoKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xlYW5SZXF1ZXN0KHJlcXVlc3QpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgZGF0YSB0aGF0IGFkZGVkIHdpdGggYExvZ0luY29taW5nUmVxdWVzdC5jb25maWd1cmVSZXF1ZXN0KClgLlxuICAgKiBAcGFyYW0gcmVxdWVzdFxuICAgKi9cbiAgcHJvdGVjdGVkIGNsZWFuUmVxdWVzdChyZXF1ZXN0OiBFeHByZXNzLlJlcXVlc3QpIHtcbiAgICBkZWxldGUgcmVxdWVzdC5pZDtcbiAgICBkZWxldGUgcmVxdWVzdC50YWdJZDtcbiAgICBkZWxldGUgcmVxdWVzdC50c2VkUmVxU3RhcnQ7XG4gICAgcmVxdWVzdC5sb2cgPSB7XG4gICAgICBpbmZvOiAoKSA9PiB7fSxcbiAgICAgIGRlYnVnOiAoKSA9PiB7fSxcbiAgICAgIHdhcm46ICgpID0+IHt9LFxuICAgICAgZXJyb3I6ICgpID0+IHt9LFxuICAgICAgdHJhY2U6ICgpID0+IHt9XG4gICAgfTtcbiAgfVxufSIsImltcG9ydCAqIGFzIEh0dHAgZnJvbSBcImh0dHBcIjtcbmltcG9ydCAqIGFzIEh0dHBzIGZyb20gXCJodHRwc1wiO1xuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gXCJjb25maWdcIjtcbmltcG9ydCAqIGFzIEV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7ICRsb2cgfSBmcm9tIFwidHMtbG9nLWRlYnVnXCI7XG5pbXBvcnQgeyBNZXRhZGF0YSwgaXNDbGFzcyB9IGZyb20gXCJAdHNlZC9jb3JlXCI7XG5pbXBvcnQgeyBKTG9nSW5jb21pbmdSZXF1ZXN0IH0gZnJvbSBcIi4vakxvZ0luY29taW5nUmVxdWVzdFwiO1xuaW1wb3J0IHsgXG4gICAgRXhwcmVzc0FwcGxpY2F0aW9uLFxuICAgIElTZXJ2ZXJMaWZlY3ljbGUsXG4gICAgSUNvbXBvbmVudFNjYW5uZWQsXG4gICAgSW5qZWN0b3JTZXJ2aWNlLFxuICAgIEhhbmRsZXJCdWlsZGVyICxcbiAgICBIdHRwU2VydmVyLFxuICAgIEh0dHBzU2VydmVyLFxuICAgIElIVFRQU1NlcnZlck9wdGlvbnMsXG4gICAgR2xvYmFsRXJyb3JIYW5kbGVyTWlkZGxld2FyZSxcbiAgICBTZXJ2ZXJTZXR0aW5nc1NlcnZpY2Vcbn0gZnJvbSBcIkB0c2VkL2NvbW1vblwiO1xuaW1wb3J0IHsgQWRkcmVzc0luZm8gfSBmcm9tIFwibmV0XCI7XG5pbXBvcnQgd2VicGFja0NvbXBvbmVudHMgZnJvbSBcIndlYnBhY2suY2h1bmsuaW5kZXhcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEpTZXJ2ZXJMb2FkZXIgaW1wbGVtZW50cyBJU2VydmVyTGlmZWN5Y2xlIHtcbiAgICBwdWJsaWMgdmVyc2lvbjogc3RyaW5nID0gXCIwLjAuMC1QTEFDRUhPTERFUlwiO1xuICAgIHByaXZhdGUgX2NvbXBvbmVudHM6IElDb21wb25lbnRTY2FubmVkW10gPSBbXTtcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3JTZXJ2aWNlO1xuICAgIHByaXZhdGUgX3NjYW5uZWRQcm9taXNlczogUHJvbWlzZTxhbnk+W10gPSBbXTtcblxuICAgIHB1YmxpYyBhc3luYyBsb2FkKCkge1xuICAgICAgICB0aGlzLl9pbmplY3RvciA9IG5ldyBJbmplY3RvclNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5jcmVhdGVFeHByZXNzQXBwbGljYXRpb24oKTtcbiAgICAgICAgXG4gICAgICAgIGlmICgodGhpcyBhcyBhbnkpLiRvbkF1dGgpIHtcbiAgICAgICAgICAgICRsb2cud2FybihcIlRoZSAkb25BdXRoIGhvb2tzIGlzIHJlbW92ZWQuIFVzZSBPdmVycmlkZU1pZGRsZXdhcmUgbWV0aG9kIGluc3RlYWQgb2YuIFNlZSBodHRwczovL2dvby5nbC9mdWZCVEUuXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBhd2FpdCB0aGlzLmluaXQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIGluaXQoKSB7XG5cbiAgICAgICAgLy8gZ2V0IGNvbmZpZyBmcm9tIGZpbGUgb3IgZnJvbSBkZWNvcmF0b3JzXG5cbiAgICAgICAgY29uc3Qgd2ViY29uZmlnID0gTWV0YWRhdGEuZ2V0KFwidHNlZDpzZXJ2ZXI6c2V0dGluZ3NcIix0aGlzKTtcblxuICAgICAgICBjb25zdCB7IG1vdW50LCAuLi5vdGhlcnMgfSA9IGNvbmZpZy5zZXJ2ZXI7XG4gICAgICAgIFxuICAgICAgICAvLyBtZXJnZSBjb25maWdcblxuICAgICAgICBNZXRhZGF0YS5zZXQoXCJ0c2VkOnNlcnZlcjpzZXR0aW5nc1wiLCB7IC4uLm90aGVycywgLi4ud2ViY29uZmlnIH0sIHRoaXMpO1xuICAgICAgICAgXG4gICAgICAgIGNvbnN0IHNldHRpbmdzID0gU2VydmVyU2V0dGluZ3NTZXJ2aWNlLmdldE1ldGFkYXRhKHRoaXMpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5zZXQoc2V0dGluZ3MpO1xuXG4gICAgICAgIC8vIHJlZ2lzdGVyaW5nIG1pZGRsZXdhcmVzLHNlcnZpY2VzLGNvbnRyb2xsZXJzLGZpbHRlcnNcblxuICAgICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCB3ZWJwYWNrQ29tcG9uZW50cy5sZW5ndGggOyBpKyspICB7XG4gICAgICAgICAgICAgT2JqZWN0LmtleXMod2VicGFja0NvbXBvbmVudHNbaV0pLm1hcChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignZW5kcG9pbnRzJykgPT0gMCApe1xuICAgICAgICAgICAgICAgICAgICB3ZWJwYWNrQ29tcG9uZW50c1tpXVtrZXldLmZvckVhY2godCA9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHQpLmZvckVhY2goaW5uZXJLZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIodFtpbm5lcktleV0saW5uZXJLZXkucmVwbGFjZSgvXy9nLFwiL1wiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXIod2VicGFja0NvbXBvbmVudHNbaV1ba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIHN0YXJ0aW5nIHNlcnZlclxuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZ2V0KFwiZW52XCIpID09PSBcInRlc3RcIikge1xuICAgICAgICAgICAgJGxvZy5zdG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBiaW5kID0gKHByb3BlcnR5OiBzdHJpbmcsIHZhbHVlOiBhbnksIG1hcDogTWFwPHN0cmluZywgYW55PikgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChwcm9wZXJ0eSkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcImh0dHBQb3J0XCI6XG4gICAgICAgICAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gZmFsc2UgJiYgdGhpcy5odHRwU2VydmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlSHR0cFNlcnZlcih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcImh0dHBzUG9ydFwiOlxuICAgICAgICAgICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT09IGZhbHNlICYmIHRoaXMuaHR0cHNTZXJ2ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVIdHRwc1NlcnZlcihPYmplY3QuYXNzaWduKG1hcC5nZXQoXCJodHRwc09wdGlvbnNcIikgfHwge30sIHtwb3J0OiB2YWx1ZX0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXR0aW5ncy5mb3JFYWNoKCh2YWx1ZSwga2V5LCBtYXApID0+IHtcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBiaW5kKGtleSwgdmFsdWUsIG1hcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlRXhwcmVzc0FwcGxpY2F0aW9uKCk6IEpTZXJ2ZXJMb2FkZXIge1xuICAgICAgICBjb25zdCBleHByZXNzQXBwID0gRXhwcmVzcygpO1xuICAgICAgICBjb25zdCBvcmlnaW5hbFVzZSA9IGV4cHJlc3NBcHAudXNlO1xuICAgICAgICBjb25zdCBpbmplY3RvciA9IHRoaXMuaW5qZWN0b3I7XG4gICAgXG4gICAgICAgIGV4cHJlc3NBcHAudXNlID0gZnVuY3Rpb24oLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgICBhcmdzID0gYXJncy5tYXAoYXJnID0+IHtcbiAgICAgICAgICAgIGlmIChpbmplY3Rvci5oYXMoYXJnKSkge1xuICAgICAgICAgICAgICBhcmcgPSBIYW5kbGVyQnVpbGRlci5mcm9tKGFyZykuYnVpbGQoaW5qZWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgcmV0dXJuIGFyZztcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICByZXR1cm4gb3JpZ2luYWxVc2UuY2FsbCh0aGlzLCAuLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgdGhpcy5pbmplY3Rvci5mb3JrUHJvdmlkZXIoRXhwcmVzc0FwcGxpY2F0aW9uLCBleHByZXNzQXBwKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZUh0dHBTZXJ2ZXIocG9ydDogc3RyaW5nIHwgbnVtYmVyKTogSlNlcnZlckxvYWRlciB7XG4gICAgICAgIGNvbnN0IGh0dHBTZXJ2ZXI6IGFueSA9IEh0dHAuY3JlYXRlU2VydmVyKHRoaXMuZXhwcmVzc0FwcCk7XG4gICAgICAgIC8vIFRPRE8gdG8gYmUgcmVtb3ZlZFxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICBodHRwU2VydmVyLmdldCA9ICgpID0+IGh0dHBTZXJ2ZXI7XG5cbiAgICAgICAgdGhpcy5pbmplY3Rvci5mb3JrUHJvdmlkZXIoSHR0cFNlcnZlciwgaHR0cFNlcnZlcik7XG5cbiAgICAgICAgdGhpcy5zZXR0aW5ncy5odHRwUG9ydCA9IHBvcnQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBjcmVhdGVIdHRwc1NlcnZlcihvcHRpb25zOiBJSFRUUFNTZXJ2ZXJPcHRpb25zKTogSlNlcnZlckxvYWRlciB7XG4gICAgICAgIGNvbnN0IGh0dHBzU2VydmVyOiBhbnkgPSBIdHRwcy5jcmVhdGVTZXJ2ZXIob3B0aW9ucywgdGhpcy5leHByZXNzQXBwKTtcbiAgICAgICAgLy8gVE9ETyB0byBiZSByZW1vdmVkXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIGh0dHBzU2VydmVyLmdldCA9ICgpID0+IGh0dHBzU2VydmVyO1xuXG4gICAgICAgIHRoaXMuaW5qZWN0b3IuZm9ya1Byb3ZpZGVyKEh0dHBzU2VydmVyLCBodHRwc1NlcnZlcik7XG5cbiAgICAgICAgdGhpcy5zZXR0aW5ncy5odHRwc1BvcnQgPSBvcHRpb25zLnBvcnQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gXG4gICAgcHJpdmF0ZSBjYWxsSG9vayA9IChrZXk6IHN0cmluZywgZWxzZUZuID0gbmV3IEZ1bmN0aW9uKCksIC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlbGY6IGFueSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGtleSBpbiB0aGlzKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKGBcXHgxQlsxbUNhbGwgaG9vayAke2tleX1cXHgxQlsyMm1gKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGZba2V5XSguLi5hcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbHNlRm4oKTtcbiAgICB9O1xuXG4gICAgcHVibGljIHJlZ2lzdGVyKGluc3RhbmNlOmFueSwgZW5kcG9pbnQ/OnN0cmluZykge1xuICAgICAgICBPYmplY3Qua2V5cyhpbnN0YW5jZSkuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgICAgIGlmIChlbmRwb2ludCl7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDb250cm9sbGVycyhlbmRwb2ludCwge3g6aW5zdGFuY2VbeF19KTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENvbXBvbmVudHMoe3g6aW5zdGFuY2VbeF19KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZENvbnRyb2xsZXJzKGVuZHBvaW50OiBzdHJpbmcsIGNvbnRyb2xsZXJzOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkQ29tcG9uZW50cyhjb250cm9sbGVycywge2VuZHBvaW50fSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZENvbXBvbmVudHMoY2xhc3NlczogYW55IHwgYW55W10sIG9wdGlvbnM6IFBhcnRpYWw8SUNvbXBvbmVudFNjYW5uZWQ+ID0ge30pOiBKU2VydmVyTG9hZGVyIHtcbiAgICAgICAgY2xhc3NlcyA9IE9iamVjdC5rZXlzKGNsYXNzZXMpXG4gICAgICAgICAgLm1hcChrZXkgPT4gY2xhc3Nlc1trZXldKVxuICAgICAgICAgIC5maWx0ZXIoY2xhenogPT4gaXNDbGFzcyhjbGF6eikpO1xuICAgIFxuICAgICAgICBjb25zdCBjb21wb25lbnRzOiBhbnkgPSBPYmplY3QuYXNzaWduKG9wdGlvbnMsIHtjbGFzc2VzfSk7XG4gICAgXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudHMgPSAodGhpcy5fY29tcG9uZW50cyB8fCBbXSkuY29uY2F0KFtjb21wb25lbnRzXSkuZmlsdGVyKG8gPT4gISFvKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGxvYWRTdGF0aWMoZXhwcmVzc0FwcDpFeHByZXNzQXBwbGljYXRpb24pIHtcbiAgICAgIGV4cHJlc3NBcHAudXNlKFwiL3B1YmxpY1wiLEV4cHJlc3Muc3RhdGljKHN0YXRpY19wYXRoKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIGxvYWRTZXR0aW5nc0FuZEluamVjdG9yKCkge1xuICAgICAgICAkbG9nLmRlYnVnKFwiSW5pdGlhbGl6ZSBzZXR0aW5nc1wiKTtcbiAgICBcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgaWYgKGtleSAhPT0gXCJtb3VudFwiICYmIGtleSAhPT0gXCJjb21wb25lbnRzU2NhblwiKSB7XG4gICAgICAgICAgICAgICRsb2cuaW5mbyhgc2V0dGluZ3MuJHtrZXl9ID0+YCwgdmFsdWUpO1xuICAgICAgICAgIH0gXG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICAkbG9nLmluZm8oXCJCdWlsZCBzZXJ2aWNlc1wiKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IubG9hZCgpO1xuICAgIH1cbiAgICBcbiAgICBwcm90ZWN0ZWQgYXN5bmMgbG9hZE1pZGRsZXdhcmVzKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIFxuICAgICAgICAkbG9nLmRlYnVnKFwiTW91bnQgbWlkZGxld2FyZXNcIik7XG4gICAgICBcbiAgICAgICAgdGhpcy51c2UoSkxvZ0luY29taW5nUmVxdWVzdCk7XG4gICAgICAgIFxuICAgICAgICBhd2FpdCB0aGlzLmNhbGxIb29rKFwiJG9uTW91bnRpbmdNaWRkbGV3YXJlc1wiLCB1bmRlZmluZWQsIHRoaXMuZXhwcmVzc0FwcCk7XG4gICAgICAgIFxuICAgICAgICBhd2FpdCB0aGlzLmluamVjdG9yLmVtaXQoXCIkYmVmb3JlUm91dGVzSW5pdFwiKTtcblxuICAgICAgICBhd2FpdCB0aGlzLmluamVjdG9yLmVtaXQoXCIkb25Sb3V0ZXNJbml0XCIsIHRoaXMuX2NvbXBvbmVudHMpO1xuICAgICAgXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9jb21wb25lbnRzOyAvLyBmcmVlIG1lbW9yeVxuICAgICAgIFxuICAgICAgICBhd2FpdCB0aGlzLmluamVjdG9yLmVtaXQoXCIkYWZ0ZXJSb3V0ZXNJbml0XCIpO1xuICAgICAgXG4gICAgICAgIGF3YWl0IHRoaXMuY2FsbEhvb2soXCIkYWZ0ZXJSb3V0ZXNJbml0XCIsIHVuZGVmaW5lZCwgdGhpcy5leHByZXNzQXBwKTtcbiAgICAgIFxuICAgICAgICAvLyBJbXBvcnQgdGhlIGdsb2JhbEVycm9ySGFuZGxlclxuICAgICAgICB0aGlzLnVzZShHbG9iYWxFcnJvckhhbmRsZXJNaWRkbGV3YXJlKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgc3RhcnRTZXJ2ZXJzKCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHByb21pc2VzOiBQcm9taXNlPGFueT5bXSA9IFtdO1xuICAgIFxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAoKHRoaXMuc2V0dGluZ3MuaHR0cFBvcnQgYXMgYW55KSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MuZ2V0SHR0cFBvcnQoKTtcbiAgICAgICAgICBwcm9taXNlcy5wdXNoKFxuICAgICAgICAgICAgdGhpcy5zdGFydFNlcnZlcih0aGlzLmh0dHBTZXJ2ZXIsIHtodHRwczogZmFsc2UsIC4uLnNldHRpbmdzfSkudGhlbihzZXR0aW5ncyA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Muc2V0SHR0cFBvcnQoc2V0dGluZ3MpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmICgodGhpcy5zZXR0aW5ncy5odHRwc1BvcnQgYXMgYW55KSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MuZ2V0SHR0cHNQb3J0KCk7XG4gICAgICAgICAgcHJvbWlzZXMucHVzaChcbiAgICAgICAgICAgIHRoaXMuc3RhcnRTZXJ2ZXIodGhpcy5odHRwc1NlcnZlciwge2h0dHBzOiB0cnVlLCAuLi5zZXR0aW5nc30pLnRoZW4oc2V0dGluZ3MgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzLnNldEh0dHBzUG9ydChzZXR0aW5ncyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsPGFueT4ocHJvbWlzZXMpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzdGFydFNlcnZlcihcbiAgICAgICAgaHR0cDogSHR0cC5TZXJ2ZXIgfCBIdHRwcy5TZXJ2ZXIsXG4gICAgICAgIHNldHRpbmdzOiB7aHR0cHM6IGJvb2xlYW47IGFkZHJlc3M6IHN0cmluZyB8IG51bWJlcjsgcG9ydDogbnVtYmVyfVxuICAgICAgKTogUHJvbWlzZTx7YWRkcmVzczogc3RyaW5nOyBwb3J0OiBudW1iZXJ9PiB7XG4gICAgICAgIGNvbnN0IHthZGRyZXNzLCBwb3J0LCBodHRwc30gPSBzZXR0aW5ncztcbiAgICBcbiAgICAgICAgJGxvZy5kZWJ1ZyhgU3RhcnQgc2VydmVyIG9uICR7aHR0cHMgPyBcImh0dHBzXCIgOiBcImh0dHBcIn06Ly8ke3NldHRpbmdzLmFkZHJlc3N9OiR7c2V0dGluZ3MucG9ydH1gKTtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBodHRwLm9uKFwibGlzdGVuaW5nXCIsIHJlc29sdmUpLm9uKFwiZXJyb3JcIiwgcmVqZWN0KTtcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29uc3QgcG9ydCA9IChodHRwLmFkZHJlc3MoKSBhcyBBZGRyZXNzSW5mbykucG9ydDtcbiAgICAgICAgICAkbG9nLmluZm8oYEhUVFAgU2VydmVyIGxpc3RlbiBvbiAke2h0dHBzID8gXCJodHRwc1wiIDogXCJodHRwXCJ9Oi8vJHtzZXR0aW5ncy5hZGRyZXNzfToke3BvcnR9YCk7XG4gICAgXG4gICAgICAgICAgcmV0dXJuIHthZGRyZXNzOiBzZXR0aW5ncy5hZGRyZXNzIGFzIHN0cmluZywgcG9ydH07XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBodHRwLmxpc3Rlbihwb3J0LCBhZGRyZXNzIGFzIGFueSk7XG4gICAgXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIFxuICAgIHB1YmxpYyBhc3luYyBzdGFydCgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCBzdGFydCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZGVidWcgPSB0aGlzLnNldHRpbmdzLmRlYnVnO1xuICAgIFxuICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgaWYgKGRlYnVnICYmIHRoaXMuc2V0dGluZ3MuZW52ICE9PSBcInRlc3RcIikge1xuICAgICAgICAgICAgJGxvZy5sZXZlbCA9IFwiZGVidWdcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmxvYWRTdGF0aWModGhpcy5leHByZXNzQXBwKTtcbiAgICAgICAgICBhd2FpdCB0aGlzLmNhbGxIb29rKFwiJG9uSW5pdFwiKTtcbiAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5nc0FuZEluamVjdG9yKCk7XG4gICAgXG4gICAgICAgICAgJGxvZy5kZWJ1ZyhcIlNldHRpbmdzIGFuZCBpbmplY3RvciBsb2FkZWRcIik7XG4gICAgXG4gICAgICAgICAgYXdhaXQgdGhpcy5sb2FkTWlkZGxld2FyZXMoKTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnN0YXJ0U2VydmVycygpO1xuICAgICAgICAgIGF3YWl0IHRoaXMuY2FsbEhvb2soXCIkb25SZWFkeVwiKTtcbiAgICBcbiAgICAgICAgICBhd2FpdCB0aGlzLmluamVjdG9yLmVtaXQoXCIkb25TZXJ2ZXJSZWFkeVwiKTtcbiAgICBcbiAgICAgICAgICAkbG9nLmluZm8oYFN0YXJ0ZWQgaW4gJHtuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0LmdldFRpbWUoKX0gbXNgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgdGhpcy5jYWxsSG9vayhcIiRvblNlcnZlckluaXRFcnJvclwiLCB1bmRlZmluZWQsIGVycik7XG4gICAgXG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHB1YmxpYyB1c2UoLi4uYXJnczogYW55W10pOiBKU2VydmVyTG9hZGVyIHtcbiAgICAgICAgdGhpcy5leHByZXNzQXBwLnVzZSguLi5hcmdzKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0KHNldHRpbmc6IHN0cmluZywgdmFsOiBhbnkpOiBKU2VydmVyTG9hZGVyIHtcbiAgICAgICAgdGhpcy5leHByZXNzQXBwLnNldChzZXR0aW5nLCB2YWwpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBlbmdpbmUoZXh0OiBzdHJpbmcsIGZuOiBGdW5jdGlvbik6IEpTZXJ2ZXJMb2FkZXIge1xuICAgICAgICB0aGlzLmV4cHJlc3NBcHAuZW5naW5lKGV4dCwgZm4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgIFxuICAgIGdldCBzZXR0aW5ncygpOiBTZXJ2ZXJTZXR0aW5nc1NlcnZpY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5zZXR0aW5ncztcbiAgICB9XG5cbiAgICBnZXQgZXhwcmVzc0FwcCgpOiBFeHByZXNzLkFwcGxpY2F0aW9uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PEV4cHJlc3NBcHBsaWNhdGlvbj4oRXhwcmVzc0FwcGxpY2F0aW9uKSE7XG4gICAgfVxuXG4gICAgZ2V0IGluamVjdG9yU2VydmljZSgpOiBJbmplY3RvclNlcnZpY2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5qZWN0b3I7XG4gICAgfVxuXG4gICAgZ2V0IGluamVjdG9yKCk6IEluamVjdG9yU2VydmljZSB7XG4gICAgcmV0dXJuIHRoaXMuX2luamVjdG9yO1xuICAgIH1cblxuICAgIGdldCBodHRwU2VydmVyKCk6IEh0dHAuU2VydmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3JTZXJ2aWNlLmdldDxIdHRwU2VydmVyPihIdHRwU2VydmVyKSE7XG4gICAgfVxuXG4gICAgZ2V0IGh0dHBzU2VydmVyKCk6IEh0dHBzLlNlcnZlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yU2VydmljZS5nZXQ8SHR0cHNTZXJ2ZXI+KEh0dHBzU2VydmVyKSE7XG4gICAgfVxuXG4gICAgJHJlZ2lzdGVyKCk6IGFueSB7IFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge30iLCJpbXBvcnQge011bHRpcGFydEZpbGV9IGZyb20gXCJAdHNlZC9tdWx0aXBhcnRmaWxlc1wiO1xuXG5pbXBvcnQge1xuICAgIENvbnRyb2xsZXIsXG4gICAgU3RhdHVzLFxuICAgIFBvc3QsXG4gICAgUHV0LFxuICAgIEdldCxcbiAgICBBdXRoZW50aWNhdGVkLFxuICAgIEJvZHlQYXJhbXNcbn0gZnJvbSBcIkB0c2VkL2NvbW1vblwiO1xuaW1wb3J0IHsgSW50ZXJuYWxTZXJ2ZXJFcnJvciwgQmFkUmVxdWVzdCB9IGZyb20gXCJ0cy1odHRwZXhjZXB0aW9uc1wiO1xuaW1wb3J0IHsgQXdzRmlsZSB9IGZyb20gXCJsaWIvQGpqLWF3cy1tdWx0ZXIvaW50ZXJmYWNlL2F3c0ZpbGVcIjtcblxuXG5AQ29udHJvbGxlcihcIi9ob21lXCIpXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29udHJvbGxlciB7XG5cbiAgICBAUG9zdChcIi9cIilcbiAgICBAU3RhdHVzKDIwMCx7ZGVzY3JpcHRpb246IFwic3VjY2Vzc1wiLHR5cGU6IFN0cmluZ30pXG4gICAgYXN5bmMgY3JlYXRlKEBNdWx0aXBhcnRGaWxlKFwiZmlsZVwiKSBmaWxlOiBBd3NGaWxlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsZTtcbiAgICAgICAgfSBjYXRjaChleGNlcHRpb24pe1xuICAgICAgICAgICAgdGhyb3cgbmV3IEludGVybmFsU2VydmVyRXJyb3IoZXhjZXB0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBQdXQoXCIvbXVsdGlwbGVcIilcbiAgICBAU3RhdHVzKDIwMCx7ZGVzY3JpcHRpb246IFwic3VjY2Vzc1wiLHR5cGU6IFN0cmluZ30pXG4gICAgYXN5bmMgY3JlYXRlTXVsdGlwbGUoQE11bHRpcGFydEZpbGUoXCJmaWxlc1wiLDQpIGZpbGVzOkF3c0ZpbGVbXSxAQm9keVBhcmFtcygnZmlsZUxlZ2VuZHMnKSBwYXJhbXM6c3RyaW5nKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgbGVnZW5kczpBcnJheTxzdHJpbmc+ID0gcGFyYW1zLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICBpZiAoIGxlZ2VuZHMubGVuZ3RoICE9IGZpbGVzLmxlbmd0aCApe1xuICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQmFkUmVxdWVzdChcImFycmF5IGxlbmd0aCBvZiBmaWxlTGVnZW5kcyBzaG91bGQgYmUgdGhlIHNhbWUgYXMgZmlsZXNcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbGVnZW5kcy5tYXAoKHg6c3RyaW5nLGk6bnVtYmVyKSA9PiAoe1t4XTpmaWxlc1tpXX0pKVxuICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBJbnRlcm5hbFNlcnZlckVycm9yKGV4Y2VwdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIEBHZXQoXCIvXCIpXG4gICAgYXN5bmMgZ2V0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkdFRUVUXCIpO1xuICAgICAgICByZXR1cm4gXCJoZWxsb1wiO1xuICAgIH1cblxufSIsImV4cG9ydCAqIGZyb20gJ3JvdXRlcy92MC9ob21lL2NvbnRyb2xsZXJzL2luZGV4JzsiLCJleHBvcnQgZGVmYXVsdCB7fSIsImltcG9ydCAqIGFzIF9hcGlfdjAgZnJvbSBcIi4vc3JjL3JvdXRlcy92MFwiO1xuaW1wb3J0ICogYXMgbWlkZGxld2FyZXMgZnJvbSBcIi4vc3JjL21pZGRsZXdhcmVzXCI7XG5pbXBvcnQgKiBhcyBzZXJ2aWNlcyBmcm9tIFwiLi9zcmMvc2VydmljZXNcIjtcbmV4cG9ydCBkZWZhdWx0IFt7ZW5kcG9pbnRzOlt7X2FwaV92MDpfYXBpX3YwfV19LCB7bWlkZGxld2FyZXM6bWlkZGxld2FyZXN9LHtzZXJ2aWNlczpzZXJ2aWNlc31dIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRzZWQvY29tbW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB0c2VkL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRzZWQvbXVsdGlwYXJ0ZmlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXdzLXNka1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9wcm9taXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9yZWZsZWN0L21ldGFkYXRhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9zZXQtaW1tZWRpYXRlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtZXRob2Qtb3ZlcnJpZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHMtaHR0cGV4Y2VwdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHMtbG9nLWRlYnVnXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=