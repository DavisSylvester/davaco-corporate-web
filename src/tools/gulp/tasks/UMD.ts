import { task, src, dest} from "gulp";

const umd = require("gulp-umd");

import { BuildDir, UmdTask } from "./constants";

task(UmdTask, [  ], () => {

    src([
        `${BuildDir}/**/*.js`
    ])
        .pipe(umd())
        .pipe(dest(BuildDir));
});
