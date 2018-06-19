"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const settings_1 = require("./configuration/settings");
class Server {
    constructor() {
        this.app = express();
    }
    startServer() {
        this.configureServer(this.app);
    }
    configureServer(app) {
        let assetsDir = path.join(__dirname, "../../../app/assets");
        let TsDir = path.join(__dirname, "../../assets/ts");
        app.use(express.static("app"));
        app.use("/node_modules", express.static("node_modules"));
        app.use("/assets", express.static(assetsDir));
        app.use("/ts", express.static(TsDir));
        app.get("/", (req, res) => {
            let rootDir = path.join(__dirname, "../../../app/index.html");
            res.sendFile(rootDir);
        });
        app.get("", (req, res) => {
            let rootDir = path.join(__dirname, "../../../app/index.html");
            res.sendFile(rootDir);
        });
        app.get('*', (req, res) => {
            let rootDir = path.join(__dirname, "../../../app/index.html");
            res.sendFile(rootDir);
        });
        app.listen(settings_1.settings.Port, settings_1.settings.Hostname, () => {
            console.log(`Server has been started at Http://${settings_1.settings.Hostname}:${settings_1.settings.Port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map