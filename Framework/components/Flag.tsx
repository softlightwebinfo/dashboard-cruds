import React from "react";
import { IFlagProps } from "@props/IFlagProps";
import { getFlagImage } from "../libs/functions";

export const Flag = ({className, style, flag}: IFlagProps) => (
    <img className={[className, "Flag"].join(" ")} style={style} src={getFlagImage(flag)} alt={flag} title={flag}/>
)