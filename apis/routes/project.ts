import { Express } from "express";
import { project } from "../routes";
import { ProjectController } from "../controllers/ProjectController";

export default (serverExpress: Express, _: {}) => {
    serverExpress.post(project.new, ProjectController.new);
    serverExpress.get(project.getAll, ProjectController.getAllUser);
};