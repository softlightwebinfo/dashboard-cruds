import { Express } from "express";
import { auth } from "../routes";
import { AuthController } from "../controllers/AuthController";

export default (serverExpress: Express, _: {}) => {
    serverExpress.post(auth.login, AuthController.login);
    serverExpress.get(auth.register, AuthController.register);
    serverExpress.get(auth.initial, AuthController.initial);
};