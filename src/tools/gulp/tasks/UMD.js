"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = require("gulp");
const umd = require("gulp-umd");
const constants_1 = require("./constants");
gulp_1.task(constants_1.UmdTask, [], () => {
    gulp_1.src([
        `${constants_1.BuildDir}/**/*.js`
    ])
        .pipe(umd())
        .pipe(gulp_1.dest(constants_1.BuildDir));
});
//# sourceMappingURL=UMD.js.map