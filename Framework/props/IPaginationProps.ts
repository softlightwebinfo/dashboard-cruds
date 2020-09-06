import { TProps } from "@app_types/TProps";

export interface IPaginationProps extends TProps {
    count: number;
    itemsPerPage?: number;
    currentPage?: number;
}