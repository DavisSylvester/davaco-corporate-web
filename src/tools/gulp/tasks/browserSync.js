"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = require("gulp");
const constants_1 = require("./constants");
const index_1 = require("../../webserver/index");
const applicationConfiguration_1 = require("../configuration/applicationConfiguration");
let browserSync = require("browser-sync").create();
gulp_1.task(constants_1.BrowserSyncTaskName, () => {
    browserSync.init({
        proxy: `http://${index_1.settings.Hostname}:${index_1.settings.Port}/`,
        port: index_1.settings.BrowserSyncPort,
        files: [
            "app/**/*.html",
            "app/assets/**/*.js",
            "app/assets/**/*.css",
            "src/assets/ts/**/*.html",
            "src/assets/ts/**/*.less",
            "src/assets/less/includes/**/*.less",
            applicationConfiguration_1.ApplicationConfiguration.Application.Settings.Source.LessFiles,
            applicationConfiguration_1.ApplicationConfiguration.Application.Settings.ApplicationDestination.CssFiles
        ]
    });
});
//# sourceMappingURL=browserSync.js.map