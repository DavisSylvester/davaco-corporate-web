import { task } from "gulp";
import { DefaultTaskName, LessTaskName, AngularHTMLCopyTaskName,
         WatchTaskName, BrowserSyncTaskName, WebServerTaskName,
         CssBuildTaskName, AngularLessCopyTaskName,
         CleanBuildFolderTask } from "./constants";


task(DefaultTaskName, 
    [ 
        LessTaskName, AngularHTMLCopyTaskName, AngularLessCopyTaskName,
        WatchTaskName, BrowserSyncTaskName, WebServerTaskName,
        CssBuildTaskName
    ], () => {

});
