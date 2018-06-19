"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = require("gulp");
const del = require('del');
const constants_1 = require("./constants");
gulp_1.task(constants_1.BuildCopy, [constants_1.CleanBuildFolderTask], () => {
    console.log(`Starting to Copy Files for Build`);
    return gulp_1.src([
        `${constants_1.TsRoot}/**/*.js`,
        `${constants_1.TsRoot}/**/*.html`,
        `!${constants_1.TsRoot}/**/*.ts`,
        `${constants_1.DestDir}/**/*.css`,
        `!${constants_1.TsRoot}/**/*.less`,
        `!${constants_1.TsRoot}/*.json`,
        `!${constants_1.TsRoot}/package*`
    ])
        .pipe(gulp_1.dest(constants_1.BuildDir));
});
//# sourceMappingURL=build.js.map