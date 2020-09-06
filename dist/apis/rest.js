"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (server, services) => {
    server.post('/api/contact', (req, res) => {
        let body = req.body;
        services.contactService.runService('Send', {
            name: body.name,
            phone: body.phone,
            email: body.email,
            message: body.message,
        }, (e, resp) => {
            // @ts-ignore
            if (e) {
                return res.status(500).json({ error: e.toString(), data: body });
            }
            return res.json(resp);
        });
    });
};
//# sourceMappingURL=rest.js.map