"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = __importDefault(require("shelljs"));
exports.default = (server, services) => {
    server.post("/api/stream", services.upload, (req, res) => {
        let dir = "/mnt/mydrive/mallorcaliverecordingstudio/streams";
        // @ts-ignore
        let ress = `mv /var/www/html/LiveRecordingStudio/front/public/images/${req.filename} ${dir}/${req.filename}`;
        // @ts-ignore
        shelljs_1.default.exec(ress);
        services.streamService.runService('Create', {
            token: req.cookies.token,
            title: req.body.title,
            description: req.body.description,
            // @ts-ignore
            video: req.filename,
            views: req.body.views,
            clicks: req.body.clicks,
            likes: req.body.likes,
            dislikes: req.body.dislikes,
        }, (err, req) => {
            if (err) {
                return res.status(500).json(err);
            }
            else {
                return res.status(200).json(req);
            }
        });
    });
    server.get("/api/streams", (req, res) => {
        services.streamService.runService('GetAll', {
            token: req.cookies.token,
        }, (err, req) => {
            if (err) {
                return res.status(500).json(err);
            }
            else {
                return res.status(200).json(req);
            }
        });
    });
    server.get("/api/stream/:id", (req, res) => {
        services.streamService.runService('Get', {
            token: req.cookies.token,
            id: req.params.id,
        }, (err, req) => {
            if (err) {
                return res.status(500).json(err);
            }
            else {
                return res.status(200).json(req);
            }
        });
    });
};
//# sourceMappingURL=stream.js.map