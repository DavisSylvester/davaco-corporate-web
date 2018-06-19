import { task, src, dest} from 'gulp';

const del = require('del');

import { DestDir, AngularComponentsHtmlFiles, AngularHtmlCopyTask, 
         AngularComponentsLessFiles, AngularComponentLessCopyTask,
         AngularComponentLessTask, TsRoot, BuildCopy, BuildDir,
         CleanBuildFolderTask } from "./constants";

task(CleanBuildFolderTask, () => {

    let promise = new Promise((resolve, reject) => {

        del([`${BuildDir}`])
        .then((x) => {
            console.log("Files have been deleted");
            resolve();
        });

    });

    return promise;
   
});
