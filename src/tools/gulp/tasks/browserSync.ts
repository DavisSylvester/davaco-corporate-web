import { task } from "gulp";
import { BrowserSyncTaskName } from "./constants";
import { settings } from "../../webserver/index";
import { ApplicationConfiguration } from "../configuration/applicationConfiguration";


let browserSync: any = require("browser-sync").create();



task(BrowserSyncTaskName, () => {
    browserSync.init({
        proxy: `http://${settings.Hostname}:${settings.Port}/`,
        port: settings.BrowserSyncPort,
        files: [
            "app/**/*.html",
            "app/assets/**/*.js",
            "app/assets/**/*.css",
            "src/assets/ts/**/*.html", 
            "src/assets/ts/**/*.less",
            ApplicationConfiguration.Application.Settings.Source.LessFiles, 
            ApplicationConfiguration.Application.Settings.ApplicationDestination.CssFiles
            ]
    });
});
