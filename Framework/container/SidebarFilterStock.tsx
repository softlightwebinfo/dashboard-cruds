import React, { Component } from "react";
import { FilterContainer } from "@components/filters/FilterContainer";
import { IDropdownMenuPropsOption } from "@props/TDropdownMenuProps";
import { Translate } from "../hoc/Translate";
import { LimpiarFiltros } from "@components/LimpiarFiltros";
import { connect } from "react-redux";
import { SidebarFilterStockProps } from "@props/SidebarFilterStockProps";

// @ts-ignore
@Translate
// @ts-ignore
@connect()
export class SidebarFilterStock extends Component<SidebarFilterStockProps> {
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
                            icon: "fa fa-car",
                            id: "matricula",
                            placeholder: this.props.getTranslationKey("filterBrand"),
                            column: "brandColumn",
                            options: brands as IDropdownMenuPropsOption[]
                        },
                        {
                            icon: "fa fa-address-card",
                            id: "numReferencia",
                            placeholder: this.props.getTranslationKey("filterReference"),
                            options: option as IDropdownMenuPropsOption[],
                            column: "0",
                        },
                    ]}
                />
            </>
        )
    }
}