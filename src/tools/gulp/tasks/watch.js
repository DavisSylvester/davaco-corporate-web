"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = require("gulp");
const constants_1 = require("./constants");
const browserSync = require("browser-sync");
const applicationConfiguration_1 = require("../configuration/applicationConfiguration");
gulp_1.task(constants_1.WatchTaskName, [], () => {
    gulp_1.watch([
        applicationConfiguration_1.ApplicationConfiguration.Application.Settings.Source.LessFiles,
        "./src/assets/less/includes/**/*.less",
        "./app/**/*.css"
    ], [constants_1.LessTaskName], () => {
        browserSync.reload();
        console.log(`Browser Sync reload!`);
    });
    gulp_1.watch([applicationConfiguration_1.ApplicationConfiguration.Application.Settings.Angular.Html], [constants_1.AngularHTMLCopyTaskName], () => {
        browserSync.reload();
        console.log(`Browser Sync reload!`);
    });
    gulp_1.watch([applicationConfiguration_1.ApplicationConfiguration.Application.Settings.Source.TypescriptLessFiles], [constants_1.AngularLessCopyTaskName], () => {
        browserSync.reload();
        console.log(`Browser Sync reload!`);
    });
});
//# sourceMappingURL=watch.js.map