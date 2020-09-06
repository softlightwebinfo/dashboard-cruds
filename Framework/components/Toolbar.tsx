import { TToolbarProps } from "@props/TToolbarProps";
import React from "react";
import { Icon } from "@components/Icon";
import { BEM } from "../libs/BEM";

export const Toolbar = (props: TToolbarProps) => {
    return (
        <nav id={"#navbarMenu"}
             style={props.style}
             className={"navbarMenu navbar navbar-expand-lg navbar-light btn-danger-custom subnavbar-fixed-top sidebar-open-menu"}>
            <ul className={"nav navbar-nav mr-auto"} id={"app_menu"}>
                {props.tabs.map((item, index) => (
                    <li className={"nav-item"} key={index} onClick={() => props.onClick(index)}>
                        <a href="#"
                           className={BEM.ClassName("nav-link py-0", {active: index == props.index})}>
                            <Icon icon={item.icon}/>
                            <span>{item.label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};