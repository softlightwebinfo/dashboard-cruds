import React from "react";
import { ITbodyProps } from "@props/ITableProps";

export const TBody = (props: ITbodyProps) => {
    return (
        <tbody>
        {props.children}
        </tbody>
    );
}