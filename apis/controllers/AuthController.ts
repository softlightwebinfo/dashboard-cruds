import User from "../models/User";
import { Auth } from "../libs/Auth";

export class AuthController {
    static async initial(req, res) {
        try {
            req.auth.protect(req);
            res.json({
                user: req.user,
                token: req.token,
                success: true,
            });
        } catch (e) {
            Auth.protectTemplate(res);
        }
    }

    static async login(req, res) {
        const {email, password} = req.body;
        const u = await User.find({email: email, password: password});
        if (u.length) {
            let token = Auth.encode(u[0]);
            return res.json({
                user: u[0],
                success: true,
                token,
            });
        }
        res.json({user: null, success: false, token: null});
    }

    static async register(_, res) {
        const user = new User({
            email: "admin@admin.com",
            name: "Administrador",
            password: "1234",
        });

        user.save(function (err) {
            if (err) {
                return res.json({
                    response: "ERROR",
                    error: err,
                })
            }
            res.send('Product Created successfully')
        })
    }
}