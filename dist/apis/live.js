"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
exports.default = (server, services) => {
    server.post('/api/live/play', (_, res) => {
        return res.status(200).json({
            verified: true,
        });
    });
    server.post('/api/live/publish', (req, res) => {
        console.log("Publish");
        // @ts-ignore
        req.io.emit("live start", true);
        services.onChange && services.onChange(true);
        return res.status(200).json({
            verified: true,
        });
    });
    server.post('/api/live/publish-done', (req, res) => {
        console.log("PUBLISH DONE");
        // @ts-ignore
        req.io.emit("live start", false);
        services.onChange && services.onChange(false);
        return res.status(200).json({
            verified: true,
        });
    });
    server.post('/api/live/done', (_, res) => {
        // @ts-ignore
        return res.status(200).json({
            verified: true,
        });
    });
};
//# sourceMappingURL=live.js.map