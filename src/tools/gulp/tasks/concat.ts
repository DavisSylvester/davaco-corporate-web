import { task, src, dest} from "gulp";
import { BuildDir, concatTask, BundleDir } from "./constants";

const concat = require("gulp-concat");
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const umd = require('gulp-umd');

task(concatTask, [  ], () => {

    src([
        `${BuildDir}/**/*.js`
    ])
        .pipe(sourcemaps.init())
        // .pipe(concat("bundle.js"))
        .pipe(sourcemaps.write())
        .pipe(umd())
        .pipe(dest(BundleDir));
});
