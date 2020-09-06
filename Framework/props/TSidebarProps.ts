import { TProps } from "@app_types/TProps";
import { IProject } from "../interfaces/IProject";

export type TSidebarProps = TProps & {
    open?: boolean;
    projects?: IProject[];
};