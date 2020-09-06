import { IBreadcrumbProps } from "@props/TBreadcrumbProps";
import React from "react";
import { Icon } from "@components/Icon";

export const Breadcrumb = (props: IBreadcrumbProps) => {

    return (
        <ul id="breadcrumbContainer" className="breadcrumb">
            {props.data.map((item, index) => (
                <li key={index}>
                    <a href={item.href || "#"}>
                        {item.icon && <Icon icon={item.icon}/>}
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    );
}