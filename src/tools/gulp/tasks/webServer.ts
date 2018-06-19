import { task, src } from "gulp";
import { WebServerTaskName } from "./constants";
import { Server } from "../../webserver/index";

task(WebServerTaskName, [], () => {
    new Server().startServer();
    
});


