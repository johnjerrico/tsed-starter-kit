import {$log} from "ts-log-debug";
import { App } from "./app";

$log.debug("Start server...");
new App().load().then( (x) =>{
    x.start()
    .catch((err) => {
        $log.error(err);
    });
});