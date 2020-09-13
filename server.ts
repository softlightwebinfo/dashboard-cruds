import next from 'next'
import express from 'express';
import * as path from "path";
import "./apis/db";
import auth from "./apis/routes/auth";
import project from "./apis/routes/project";
import jwt from "jsonwebtoken";

const bodyParser = require("body-parser");
const routes = require('./routes');
const app = next({dev: process.env.NODE_ENV !== 'production'});
const handler = routes.getRequestHandler(app);
const cookieParser = require('cookie-parser');
import dotenv from "dotenv";
import { COOKIE_SECRET, JWT_SECRET } from './apis/constants';
import { parseCookies } from "./Framework/libs/cookie";
import { Auth } from "./apis/libs/Auth";

dotenv.config();
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
    serverExpress.use(cookieParser(COOKIE_SECRET));
    serverExpress.use(bodyParser.json());
    serverExpress.use(bodyParser.urlencoded({extended: false}));
    serverExpress.use(express.static(path.join(__dirname, 'public')));
    serverExpress.use(function (req, _, next) {
        const cookies = parseCookies(req);
        const token = req.body.token || req.query.token || req.headers["x-access-token"] || cookies.token;
        // @ts-ignore
        req.auth = Auth;
        if (token) {
            return jwt.verify(token, JWT_SECRET, function (err, decoded) {
                if (err) {
                    decoded = null;
                } else {
                    decoded = decoded.data;
                }
                // @ts-ignore
                req.user = decoded;
                // @ts-ignore
                req.token = token;
                // @ts-ignore
                req.isLogin = !!decoded;
                return next();
            });
        }
        next();
    })
    auth(serverExpress, {});
    project(serverExpress, {});
    serverExpress.use(handler);
    server.listen(3000);
});