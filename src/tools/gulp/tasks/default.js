"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = require("gulp");
const constants_1 = require("./constants");
gulp_1.task(constants_1.DefaultTaskName, [
    constants_1.LessTaskName, constants_1.AngularHTMLCopyTaskName, constants_1.AngularLessCopyTaskName,
    constants_1.WatchTaskName, constants_1.BrowserSyncTaskName, constants_1.WebServerTaskName,
    constants_1.CssBuildTaskName
], () => {
});
//# sourceMappingURL=default.js.map