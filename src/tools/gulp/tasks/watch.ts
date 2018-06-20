import { task, watch } from "gulp";
import { WatchTaskName, LessTaskName,
        AngularHTMLCopyTaskName, AngularLessCopyTaskName } from "./constants";
import browserSync = require("browser-sync");
import { ApplicationConfiguration } from "../configuration/applicationConfiguration";


task(WatchTaskName, [], () => {
    watch([
        ApplicationConfiguration.Application.Settings.Source.LessFiles,
        "./src/assets/less/includes/**/*.less",
        "./app/**/*.css"], 
        [ LessTaskName ], () => {
        browserSync.reload();
        console.log(`Browser Sync reload!`);
    });
    watch([ApplicationConfiguration.Application.Settings.Angular.Html], [AngularHTMLCopyTaskName ], () => {
        browserSync.reload();
        console.log(`Browser Sync reload!`);
    });
    
    watch([ApplicationConfiguration.Application.Settings.Source.TypescriptLessFiles], [ AngularLessCopyTaskName ], () => {
        browserSync.reload();
        console.log(`Browser Sync reload!`);
    });
});
