import { projectType } from "../actionCreators";
import { IProject } from "../../interfaces/IProject";

export const addProjects = (data: IProject[]) => ({type: projectType.ADD_PROJECT, data});