import React from "react";
import { Input } from "@components/Input";
import { TSearchProps } from "@app_types/TSearchProps";
import { Icon } from "@components/Icon";

export const Search = (props: TSearchProps) => (
    <div className={"Search"}>
        <Icon icon={"fa fa-search"}/>
        <Input
            onChange={props.onChange}
            value={props.value}
            placeholder={"Búsqueda"}
        />
    </div>
)