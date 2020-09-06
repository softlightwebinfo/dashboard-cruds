import { TChildren } from '../types/TChildren';
import { ReactElement } from "react";

export type TTemplateProps = {
    children: TChildren;
    title: string;
    extra?: ReactElement;
};
