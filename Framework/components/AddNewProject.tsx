import React from "react";
import { BEM, CardComponent, IconComponent, TypographyComponent } from "@codeunic/library-ui/build";
import { IAddNewProjectProps } from "@props/IAddNewProjectProps";

export const AddNewProject = (props: IAddNewProjectProps) => {
    const bm = new BEM("AddNewProject", {});
    return (
        <CardComponent className={bm.toString()} onClick={props.onClick}>
            <IconComponent icon={"plus"}/>
            <TypographyComponent variant={"overline"}>{props.title}</TypographyComponent>
        </CardComponent>
    );
};