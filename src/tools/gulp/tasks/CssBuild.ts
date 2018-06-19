import { task, src, dest } from "gulp";
import { CssBuildTaskName } from "./constants";
import { ApplicationConfiguration } from "../configuration/applicationConfiguration";
import cssnano = require("gulp-cssnano");
import cleanCss = require("gulp-clean-css");

task(CssBuildTaskName, [], () => {
    console.log(ApplicationConfiguration.Application.Settings.ApplicationDestination.CssFiles);
    src([ApplicationConfiguration.Application.Settings.ApplicationDestination.CssFiles])
    //  .pipe(plumber())
     .pipe(cssnano())
     .pipe(cleanCss())
     .pipe(dest(ApplicationConfiguration.Application.Settings.Build.Root));

});
