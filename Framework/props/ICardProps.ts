import { TProps } from "@app_types/TProps";
import { ReactElement } from "react";

export interface ICardProps extends TProps {
    children: ReactElement;
}