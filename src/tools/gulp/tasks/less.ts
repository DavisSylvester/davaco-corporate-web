import { task, src, dest } from "gulp";
import { LessTaskName } from "./constants";
import { ApplicationConfiguration } from "../configuration/applicationConfiguration";
import plumber = require("gulp-plumber");
import sourcemaps = require("gulp-sourcemaps");
import less = require("gulp-less");
import autoprefixer = require("gulp-autoprefixer");

task(LessTaskName, [], () => {
  console.log(ApplicationConfiguration.Application.Settings.Source.LessFiles);
    src([ApplicationConfiguration.Application.Settings.Source.LessFiles])
     .pipe(plumber())
     .pipe(sourcemaps.init())
     .pipe(less())
     .pipe(autoprefixer({
         browsers: ["last 2 versions"]
       }))
     .pipe(sourcemaps.write("."))
     .pipe(dest(ApplicationConfiguration.Application.Settings.ApplicationDestination.Css));

});
