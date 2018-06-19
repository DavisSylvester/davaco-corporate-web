import * as express from "express";
import path = require("path");
import { settings } from "./configuration/settings";
export class Server {

    private app: express.Application;
    // private router: express.Router;


    constructor() {
        this.app = express();
        // this.router = express.Router();

    }

    public startServer(): void {
        this.configureServer(this.app);

    }

    private configureServer(app: express.Application): void {

        // console.log(`Env: ${process.env}`);
        // console.log(__dirname);
        
        let assetsDir = path.join(__dirname, "../../../app/assets");
        let TsDir = path.join(__dirname, "../../assets/ts");

        
        app.use(express.static("app"));
        app.use("/node_modules", express.static("node_modules"));
        app.use("/assets", express.static(assetsDir));
        app.use("/ts", express.static(TsDir));
        
        app.get("/", (req, res) => {
            // console.log(`DIR: ${__dirname}`);
            let rootDir = path.join(__dirname, "../../../app/index.html");

            res.sendFile(rootDir);
        });

        // console.log(`DIR: ${__dirname + "./../../app/index.html"}`);
        app.get("", (req, res) => {
            // console.log(`DIR: ${__dirname}`);
            // console.log(__dirname + "../../../app/index.html");

            let rootDir = path.join(__dirname, "../../../app/index.html");

            res.sendFile(rootDir);
        });

        app.get('*', (req, res) => {
            let rootDir = path.join(__dirname, "../../../app/index.html");
            res.sendFile(rootDir);
        });

        app.listen(settings.Port, settings.Hostname, () => {
            console.log(`Server has been started at Http://${settings.Hostname}:${settings.Port}`);
        });
    }

    // private configureRoutes(router: express.Router): void {

    // }
}
