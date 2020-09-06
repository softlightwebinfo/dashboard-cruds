import React, { useState } from "react";
import { IToggleProps } from "@props/IToggleProps";
import { BEM } from "../libs/BEM";
import { Icon } from "@components/Icon";

export const Toggle = ({children, style, title, className}: IToggleProps) => {
    const [isToggle, setToggle] = useState(false);
    const bm = new BEM("Toggle", {
        open: isToggle,
    });
    bm.Append(className);
    return (
        <div style={style} className={bm.toString()}>
            <a className={"FilterClear"} href="#" onClick={() => setToggle(!isToggle)}>
                {title}
                <Icon icon={BEM.ClassName("fa fa-chevron-down", {
                    "rotate rotate-icon": !isToggle,
                })}/>
            </a>
            <div className={bm.Children("content")}>
                {children}
            </div>
        </div>
    );
}