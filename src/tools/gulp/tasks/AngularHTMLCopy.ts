import { task, src, dest } from "gulp";
import { AngularHTMLCopyTaskName } from "./constants";
import { ApplicationConfiguration } from "../configuration/applicationConfiguration";


task(AngularHTMLCopyTaskName, [], () => {
    src([ApplicationConfiguration.Application.Settings.Angular.Html])
        .pipe(dest(ApplicationConfiguration.Application.Settings.Angular.Destination));
});
