import { TProps } from "@app_types/TProps";

export interface IBreadcrumbProps extends TProps {
    data: TBreadcrumbData[];
}

export type TBreadcrumbData = {
    href?: string;
    icon?: string;
    text?: string;
}