import "@tsed/multipartfiles";
import {$log} from "ts-log-debug";
import {JServerLoader} from "lib/@jj-tsed/common/jServerLoader";

import * as cors from "cors";

// multer
import { aws } from "config"

// database 
import { database } from "config";
import { createConnection } from "typeorm";
import { ServerSettings } from "@tsed/common";
import { AwsMulterStorage } from "lib/@jj-aws-multer";
import * as dbmodel from "entities";

@ServerSettings({
    "multer": {
        "storage": new AwsMulterStorage(
            aws.bucket,
            aws.accessKey,
            aws.secretAccessKey
        )
    }
})
export class App extends JServerLoader {
    $onMountingMiddlewares(): void | Promise<any> {
        const bodyParser = require("body-parser"),
            compress = require("compression"),
            methodOverride = require("method-override");
        
        this
            .use(compress({}))
            .use(methodOverride())
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
                extended: true
            }))
            .use(cors());
        return null;
    }

    async $onReady() {
        try {
            //const { entities, subscribers, migrations, ...others} = database;
            //const dbConfig = {entities:Object.keys(dbmodel).map(x=>dbmodel[x]), ...others};
            //await createConnection(dbConfig);
            $log.debug("Server initialized");
        } catch (exception) {
            throw new Error(exception);
        }
        
    }

    $onServerInitError(error): any {
        $log.error("Server encounter an error =>", error);
    }
}