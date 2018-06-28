"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = require("gulp");
const constants_1 = require("./constants");
const applicationConfiguration_1 = require("../configuration/applicationConfiguration");
const plumber = require("gulp-plumber");
const sourcemaps = require("gulp-sourcemaps");
const less = require("gulp-less");
const autoprefixer = require("gulp-autoprefixer");
gulp_1.task(constants_1.LessTaskName, [], () => {
    console.log(applicationConfiguration_1.ApplicationConfiguration.Application.Settings.Source.LessFiles);
    gulp_1.src([applicationConfiguration_1.ApplicationConfiguration.Application.Settings.Source.LessFiles])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({
        browsers: ["last 2 versions"]
    }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp_1.dest(applicationConfiguration_1.ApplicationConfiguration.Application.Settings.ApplicationDestination.Css));
});
//# sourceMappingURL=less.js.map