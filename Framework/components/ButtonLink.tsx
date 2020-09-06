import { IButtonLinkProps } from "@props/IButtonLinkProps";
import React from "react";
import { Icon } from "@components/Icon";

export const ButtonLink = (props: IButtonLinkProps) => (
    <a type="button"
       href={props.href}
       className="btn btn-pricing-action-primary mr-1 mt-2 mb-1 download-reference"
       title={props.title}
    >
        <Icon icon={props.icon}/>
    </a>
);