"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = require("gulp");
const constants_1 = require("./constants");
const index_1 = require("../../webserver/index");
gulp_1.task(constants_1.WebServerTaskName, [], () => {
    new index_1.Server().startServer();
});
//# sourceMappingURL=webServer.js.map