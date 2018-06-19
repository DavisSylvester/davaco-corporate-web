"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = require("gulp");
const constants_1 = require("./constants");
const applicationConfiguration_1 = require("../configuration/applicationConfiguration");
gulp_1.task(constants_1.AngularHTMLCopyTaskName, [], () => {
    gulp_1.src([applicationConfiguration_1.ApplicationConfiguration.Application.Settings.Angular.Html])
        .pipe(gulp_1.dest(applicationConfiguration_1.ApplicationConfiguration.Application.Settings.Angular.Destination));
});
//# sourceMappingURL=AngularHTMLCopy.js.map