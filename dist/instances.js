"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSocket = void 0;
const _settings_1 = require("@settings");
let socket;
const socket_io_client_1 = __importDefault(require("socket.io-client"));
exports.getSocket = () => {
    if (!socket) {
        socket = socket_io_client_1.default(_settings_1.setting.IO);
    }
    return socket;
};
//# sourceMappingURL=instances.js.map