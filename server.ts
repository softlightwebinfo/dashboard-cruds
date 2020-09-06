import next from 'next'
import express from 'express';
import * as path from "path";

const bodyParser = require("body-parser");
const routes = require('./routes');
const app = next({dev: process.env.NODE_ENV !== 'production'});
const handler = routes.getRequestHandler(app);
const cookieParser = require('cookie-parser');

// SERVER AND IO SOCKET
let serverExpress = express();
const server = require('http').createServer(serverExpress);
// io.on("connection", function (socket) {
//     socket.on("new user", function (data) {
//         socket.userId = data;
//         activeUsers.add(data);
//     });
//
//     socket.on("disconnect", () => {
//         activeUsers.delete(socket.userId);
//     });
// });
// With express
app.prepare().then(() => {
    serverExpress.use(express.json());
    serverExpress.use(cookieParser());
    serverExpress.use(bodyParser.json());
    serverExpress.use(bodyParser.urlencoded({extended: false}));
    serverExpress.use(express.static(path.join(__dirname, 'public')));
    // serverExpress.use(function (req, _, next) {
    //     // @ts-ignore
    //     req.io = io;
    //     next();
    // })
    // user(serverExpress, {});
    serverExpress.use(handler);
    server.listen(3000);
});