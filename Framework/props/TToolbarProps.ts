import { TProps } from "@app_types/TProps";

export interface TToolbarProps extends TProps {
    tabs: TToolbarPropsTab[];
    index: number;

    onClick(index: number): void;
}

export type TToolbarPropsTab = {
    icon: string;
    label: string;
}