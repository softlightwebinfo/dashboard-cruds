import Project from "../models/Project";
import { Auth } from "../libs/Auth";
export class ProjectController {
    static async new(req, res) {
        try {
            req.auth.protect(req);
            const body = req.body;
            const project = new Project({
                ...body,
                fk_user: req.user._id,
            })
            const save = await project.save();
            res.json({result: save});
        } catch (e) {
            Auth.protectTemplate(res);
        }
    }

    static async getAllUser(req, res) {
        try {
            req.auth.protect(req);
            const u = await Project.find({fk_user: req.user._id});
            res.json({result: u})
        } catch (e) {
            Auth.protectTemplate(res);
        }
    }
}