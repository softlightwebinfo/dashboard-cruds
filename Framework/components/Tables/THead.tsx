import React from "react";
import { ITheadProps } from "@props/ITableProps";

export const THead = (props: ITheadProps) => {
    return (
        <thead>
        <tr>
            {props.columns.map((col, index) => (
                <th
                    onClick={() => col.sort && props.onClickSort(col.key)}
                    data-sort={col.sort}
                    data-sort-order={col.key in props.sortSelected && props.sortSelected[col.key]}
                    data-name={props.showMetaData && col.key}
                    data-index={props.showMetaData && index}
                    key={index}
                >
                    {col.text}
                </th>
            ))}
        </tr>
        </thead>
    )
}