import { task, src, dest} from 'gulp';
// import del  from 'del';
const del = require('del');

import { DestDir, TsRoot, BuildCopy,
         BuildDir, CleanBuildFolderTask } from "./constants";

task(BuildCopy, [ CleanBuildFolderTask ], () => {

    console.log(`Starting to Copy Files for Build`);
    return src([
        `${TsRoot}/**/*.js`,
        `${TsRoot}/**/*.html`,
        `!${TsRoot}/**/*.ts`, 
        `${DestDir}/**/*.css`,
        `!${TsRoot}/**/*.less`,
        `!${TsRoot}/*.json`,
        `!${TsRoot}/package*`
    ])
        
        .pipe(dest(BuildDir));
});
