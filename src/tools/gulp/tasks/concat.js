"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = require("gulp");
const constants_1 = require("./constants");
const concat = require("gulp-concat");
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const umd = require('gulp-umd');
gulp_1.task(constants_1.concatTask, [], () => {
    gulp_1.src([
        `${constants_1.BuildDir}/**/*.js`
    ])
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(umd())
        .pipe(gulp_1.dest(constants_1.BundleDir));
});
//# sourceMappingURL=concat.js.map