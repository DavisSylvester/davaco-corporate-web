"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = require("gulp");
const constants_1 = require("./constants");
const applicationConfiguration_1 = require("../configuration/applicationConfiguration");
const cssnano = require("gulp-cssnano");
const cleanCss = require("gulp-clean-css");
gulp_1.task(constants_1.CssBuildTaskName, [], () => {
    console.log(applicationConfiguration_1.ApplicationConfiguration.Application.Settings.ApplicationDestination.CssFiles);
    gulp_1.src([applicationConfiguration_1.ApplicationConfiguration.Application.Settings.ApplicationDestination.CssFiles])
        .pipe(cssnano())
        .pipe(cleanCss())
        .pipe(gulp_1.dest(applicationConfiguration_1.ApplicationConfiguration.Application.Settings.Build.Root));
});
//# sourceMappingURL=cssBuild.js.map