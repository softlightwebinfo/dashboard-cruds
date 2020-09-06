import React from "react";
import { IBrandProps } from "@props/IBrandProps";
import { getBrandImage } from "../libs/functions";

export const Brand = ({className, style, brand}: IBrandProps) => (
    <img className={[className, "brandImage"].join(" ")} style={style} src={getBrandImage(brand)} alt={brand} title={brand}/>
)