import React from "react";
import { ICardProps } from "@props/ICardProps";

export const Card = (props: ICardProps) => (<div style={props.style} className={"card"}>{props.children}</div>);