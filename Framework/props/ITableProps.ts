import { TProps } from "@app_types/TProps";
import { ReactElement } from "react";
import { ETableColumnType } from "../enums/eTableColumnType";

export interface ITableProps extends TProps {
    columns: ITableColumn[];
    rows: ITableRow[];
    showMetaData?: boolean;
}

export interface ITableState {

}

/* TABLE HEAD PROPS */
export interface ITheadProps {
    columns: ITableColumn[];
    showMetaData?: boolean;
    sortSelected: ITheadPropsSortSelected;

    onClickSort(key: string): void;
}

export type ITheadPropsSortSelected = {
    [p: string]: "ascending" | "descending" | string;
}

/* TABLE Body PROPS */
export interface ITbodyProps {
    children: ReactElement | ReactElement[];
}

export type ITableColumn = {
    sort?: boolean;
    key: string;
    text: string;
    type: ETableColumnType;
}
export type ITableRow = {
    id: string;
    [p: string]: any;
}