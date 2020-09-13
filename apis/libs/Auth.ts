import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants";

export class Auth {
    static encode(sign) {
        return jwt.sign({
            data: sign,
        }, JWT_SECRET, {expiresIn: '1h'});
    }

    static decode(token: any) {
        return jwt.verify(token, JWT_SECRET);
    }

    static protect(req) {
        if (!Auth.isLogin(req)) {
            const obj = {
                error: true,
                success: false,
                message: "No esta logeado"
            };
            throw new Error(obj.message);
        }
    }

    static isLogin(req) {
        return req.isLogin;
    }

    static protectTemplate(res) {
        const obj = {
            error: true,
            success: false,
            message: "No esta logeado",
            user: null,
            token: null,
        };
        return res.status(403).json(obj);
    }
}