"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = require("gulp");
const del = require('del');
const constants_1 = require("./constants");
gulp_1.task(constants_1.CleanBuildFolderTask, () => {
    let promise = new Promise((resolve, reject) => {
        del([`${constants_1.BuildDir}`])
            .then((x) => {
            console.log("Files have been deleted");
            resolve();
        });
    });
    return promise;
});
//# sourceMappingURL=cleanBuildFolder.js.map