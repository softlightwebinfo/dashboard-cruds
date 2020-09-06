import React, { Component } from "react";
import { FilterContainer } from "@components/filters/FilterContainer";
import { IDropdownMenuPropsOption } from "@props/TDropdownMenuProps";
import { Translate } from "../hoc/Translate";
import { LimpiarFiltros } from "@components/LimpiarFiltros";
import { connect } from "react-redux";
import { SidebarFilterContactProps } from "@props/SidebarFilterContactProps";

// @ts-ignore
@Translate
// @ts-ignore
@connect()
export class SidebarFilterContact extends Component<SidebarFilterContactProps> {
    private year = new Date().getFullYear();
    public state = {
        brands: [],
        models: [],
        anio: [...new Array(5)].map((_, index) => ({
            id: (this.year - index).toString(),
            label: (this.year - index).toString(),
        })),
    };

    constructor(props) {
        super(props);
    }

    getMap(r) {
        return r.map((item) => ({id: item, label: item}));
    }

    componentDidMount() {

    }

    render() {
        const option: unknown = this.state.brands;
        const { brands} = this.state;
        return (
            <>
                <LimpiarFiltros/>
                <FilterContainer
                    onChange={(items, item, id) => {
                        console.log(items, item, id);
                    }}
                    options={[
                        {
                            icon: "fa fa-user",
                            id: "nombre",
                            placeholder: this.props.getTranslationKey("name"),
                            column: "brandColumn",
                            options: brands as IDropdownMenuPropsOption[]
                        },
                        {
                            icon: "fa fa-phone",
                            id: "phone",
                            placeholder: this.props.getTranslationKey("phone"),
                            options: option as IDropdownMenuPropsOption[],
                            column: "0",
                        },{
                            icon: "fa fa-envelope",
                            id: "email",
                            placeholder: this.props.getTranslationKey("email"),
                            options: option as IDropdownMenuPropsOption[],
                            column: "0",
                        },{
                            icon: "fa fa-users",
                            id: "group",
                            placeholder: "SI",
                            options: option as IDropdownMenuPropsOption[],
                            column: "0",
                        },{
                            icon: "fa fa-user",
                            id: "role",
                            placeholder: "Role",
                            options: option as IDropdownMenuPropsOption[],
                            column: "0",
                        },
                    ]}
                />
            </>
        )
    }
}