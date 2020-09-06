"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const sharp = require('sharp');
exports.default = (server, services) => {
    server.post('/api/banner', services.upload, async (req, res) => {
        // @ts-ignore
        const imageName = req.filename;
        let body = req.body;
        // @ts-ignore
        const { filename: image } = req.file;
        // @ts-ignore
        await sharp(req.file.path)
            .resize(1920)
            .png({ quality: 50 })
            .toFile(
        // @ts-ignore
        path.resolve(req.file.destination, 'banners', image));
        // @ts-ignore
        fs.unlinkSync(req.file.path);
        services.bannerService.runService('Create', {
            token: req.cookies.token,
            title: body.title,
            subtitle: body.subtitle,
            route: body.route,
            page: body.page,
            button: body.button,
            image: imageName,
        }, (e, resp) => {
            // @ts-ignore
            if (e) {
                // TODO Eliminar imagen cuando falla
                return res.status(500).json({ error: e.toString(), data: body });
            }
            return res.json(resp);
        });
    });
    server.put('/api/banner/:id', services.upload, async (req, res) => {
        let body = req.body;
        let imageName = undefined;
        // @ts-ignore
        if (req.file) {
            // @ts-ignore
            imageName = req.filename;
            // @ts-ignore
            const { filename: image } = req.file;
            // @ts-ignore
            await sharp(req.file.path)
                .resize(1920)
                .png({ quality: 50 })
                .toFile(
            // @ts-ignore
            path.resolve(req.file.destination, 'banners', image));
            // @ts-ignore
            fs.unlinkSync(req.file.path);
        }
        services.bannerService.runService('Update', {
            id: req.params.id,
            token: req.cookies.token,
            title: body.title,
            subtitle: body.subtitle,
            route: body.route,
            page: body.page,
            button: body.button,
            image: imageName,
        }, (e, resp) => {
            // @ts-ignore
            if (e) {
                // TODO Eliminar imagen cuando falla
                return res.status(500).json({ error: e.toString(), data: body });
            }
            return res.json(resp);
        });
    });
    server.get('/api/banner', (req, res) => {
        // @ts-ignore
        services.bannerService.runService('GetAll', {
            token: req.cookies.token,
        }, (e, resp) => {
            // @ts-ignore
            if (e) {
                // TODO Eliminar imagen cuando falla
                return res.status(500).json({ error: e.toString() });
            }
            return res.json(resp);
        });
    });
    server.delete('/api/banner/:id', (req, res) => {
        // @ts-ignore
        services.bannerService.runService('Delete', {
            token: req.cookies.token,
            id: req.params.id,
        }, (e, resp) => {
            // @ts-ignore
            if (e) {
                // TODO Eliminar imagen cuando falla
                return res.status(500).json({ error: e.toString() });
            }
            fs.unlink(`./public/images/banners/${req.body.image}`, err => {
                if (err) {
                    return res.status(500).json({ error: err.toString() });
                }
                return res.json(resp);
            });
        });
    });
    server.put('/api/banner/:id/inactive', (req, res) => {
        // @ts-ignore
        services.bannerService.runService('active', {
            token: req.cookies.token,
            id: req.params.id,
            active: false,
        }, (e, resp) => {
            // @ts-ignore
            if (e) {
                // TODO Eliminar imagen cuando falla
                return res.status(500).json({ error: e.toString() });
            }
            return res.json(resp);
        });
    });
    server.put('/api/banner/:id/active', (req, res) => {
        // @ts-ignore
        services.bannerService.runService('active', {
            token: req.cookies.token,
            id: req.params.id,
            active: true,
        }, (e, resp) => {
            // @ts-ignore
            if (e) {
                // TODO Eliminar imagen cuando falla
                return res.status(500).json({ error: e.toString() });
            }
            return res.json(resp);
        });
    });
};
//# sourceMappingURL=banner.js.map