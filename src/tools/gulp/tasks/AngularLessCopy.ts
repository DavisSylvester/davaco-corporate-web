import { task, src, dest } from "gulp";
import { AngularLessCopyTaskName } from "./constants";
import { ApplicationConfiguration } from "../configuration/applicationConfiguration";
import plumber = require("gulp-plumber");
import sourcemaps = require("gulp-sourcemaps");
import less = require("gulp-less");
import autoprefixer = require("gulp-autoprefixer");


task(AngularLessCopyTaskName, [], () => {
    src([ApplicationConfiguration.Application.Settings.Source.TypescriptLessFiles])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ["last 2 versions"]
        }))
        .pipe(sourcemaps.write("."))
        .pipe(dest(ApplicationConfiguration.Application.Settings.Angular.Destination));
});
