import { TProps } from "@app_types/TProps";
import { TChildren } from "@app_types/TChildren";

export interface IToggleProps extends TProps {
    children: TChildren;
    title: string;
}