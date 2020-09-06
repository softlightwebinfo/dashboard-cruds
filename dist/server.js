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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_1 = __importDefault(require("next"));
const express_1 = __importDefault(require("express"));
const path = __importStar(require("path"));
const bodyParser = require("body-parser");
// @ts-ignore
const user_1 = __importDefault(require("./apis/user"));
const node_grpc_client_1 = __importDefault(require("node-grpc-client"));
const exampleApi_1 = __importDefault(require("./apis/exampleApi"));
const banner_1 = __importDefault(require("./apis/banner"));
const studio_1 = __importDefault(require("./apis/studio"));
const rest_1 = __importDefault(require("./apis/rest"));
const live_1 = __importDefault(require("./apis/live"));
const stream_1 = __importDefault(require("./apis/stream"));
const generate_1 = __importDefault(require("./apis/generate"));
const FCM_1 = require("./Framework/libs/FCM");
const multer = require('multer');
// @ts-ignore
const sharp = require('sharp');
const routes = require('./routes');
const app = next_1.default({ dev: process.env.NODE_ENV !== 'production' });
const handler = routes.getRequestHandler(app);
const cookieParser = require('cookie-parser');
// SERVER AND IO SOCKET
let serverExpress = express_1.default();
const server = require('http').createServer(serverExpress);
const io = require('socket.io')(server);
// SERVICES PROTOS
const PROTO_PATH_USER_SERVICE = __dirname + '/proto/userService.proto';
const PROTO_PATH_BANNER_SERVICE = __dirname + '/proto/bannerService.proto';
const PROTO_PATH_STUDIO_SERVICE = __dirname + '/proto/studioService.proto';
const PROTO_PATH_CONTACT_SERVICE = __dirname + '/proto/contactService.proto';
const PROTO_PATH_STREAM_SERVICE = __dirname + '/proto/streamService.proto';
// FCM
FCM_1.FCM.INITIALIZE();
// CONFIGS
let storage = multer.diskStorage({
    destination: function (_, __, callback) {
        callback(null, './public/images');
    },
    filename: function (req, file, callback) {
        const ext = path.extname(file.originalname);
        const name = file.fieldname + '-' + Date.now() + ext;
        req.filename = name;
        callback(null, name);
    },
});
let upload = multer({ storage: storage }).single('file');
let uploadMultiple = multer({ storage: storage }).array('file', 10);
const userService = new node_grpc_client_1.default(PROTO_PATH_USER_SERVICE, 'proto', 'UserService', 'localhost:4040');
const bannerService = new node_grpc_client_1.default(PROTO_PATH_BANNER_SERVICE, 'proto', 'BannerService', 'localhost:4040');
const studioService = new node_grpc_client_1.default(PROTO_PATH_STUDIO_SERVICE, 'proto', 'StudioService', 'localhost:4040');
const contactService = new node_grpc_client_1.default(PROTO_PATH_CONTACT_SERVICE, 'proto', 'ContactService', 'localhost:4040');
const streamService = new node_grpc_client_1.default(PROTO_PATH_STREAM_SERVICE, 'proto', 'StreamService', 'localhost:4040');
const activeUsers = new Set();
let messages = [];
let likes = {};
let dislikes = {};
let views = 0;
let online = false;
io.on("connection", function (socket) {
    console.log("Made socket connection");
    socket.emit("chat messages", messages);
    socket.emit("new user", [...activeUsers]);
    socket.emit("likes", Object.keys(likes).length);
    socket.emit("dislikes", Object.keys(dislikes).length);
    socket.emit("views", views);
    socket.emit("live start", online);
    socket.on("new user", function (data) {
        socket.userId = data;
        views++;
        activeUsers.add(data);
        io.emit("views", views);
        io.emit("new user", [...activeUsers]);
    });
    socket.on("disconnect", () => {
        activeUsers.delete(socket.userId);
        io.emit("user disconnected", socket.userId);
    });
    socket.on("chat disconnect", () => {
        activeUsers.delete(socket.userId);
        io.emit("user disconnected", socket.userId);
    });
    socket.on("chat message", function (data) {
        messages = [...messages, data];
        io.emit("chat message", data);
    });
    socket.on("typing", function (data) {
        socket.broadcast.emit("typing", data);
    });
    socket.on("like", function (data) {
        if (!(data.user in likes)) {
            likes[data.user] = 1;
            io.emit("likes", Object.keys(likes).length);
        }
    });
    socket.on("dislike", function (data) {
        if (!(data.user in dislikes)) {
            dislikes[data.user] = 1;
            io.emit("dislikes", Object.keys(dislikes).length);
        }
    });
    socket.on("video:play", function (id) {
        streamService.runService('StAdd', {
            id,
            column: "st_clicks",
        }, () => {
        });
    });
});
// With express
app.prepare().then(() => {
    serverExpress.use(express_1.default.json());
    serverExpress.use(cookieParser());
    serverExpress.use(bodyParser.json());
    serverExpress.use(bodyParser.urlencoded({ extended: false }));
    serverExpress.use(express_1.default.static(path.join(__dirname, 'public')));
    serverExpress.use(function (req, _, next) {
        // @ts-ignore
        req.io = io;
        next();
    });
    exampleApi_1.default();
    user_1.default(serverExpress, { userService });
    banner_1.default(serverExpress, { bannerService, upload });
    studio_1.default(serverExpress, { studioService, upload, uploadMultiple });
    stream_1.default(serverExpress, { upload, streamService });
    rest_1.default(serverExpress, { contactService });
    // @ts-ignore
    live_1.default(serverExpress, {
        onChange: (onl) => {
            online = onl;
            if (!online) {
                messages = [];
                likes = {};
                dislikes = {};
                views = 0;
            }
            if (onl) {
                userService.runService('GetAllTokens', {}, (e, resp) => {
                    // @ts-ignore
                    if (!e) {
                        console.log(resp);
                    }
                });
            }
        }
    });
    generate_1.default(serverExpress, { streamService, studioService });
    serverExpress.use(handler);
    server.listen(3030);
});
//# sourceMappingURL=server.js.map