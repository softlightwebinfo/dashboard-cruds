import React, { Component } from "react";
import { FilterContainer } from "@components/filters/FilterContainer";
import { IDropdownMenuPropsOption } from "@props/TDropdownMenuProps";
import { Translate } from "../hoc/Translate";
import { SidebarFilterPricingProps } from "@props/SidebarFilterPricingProps";
import { LimpiarFiltros } from "@components/LimpiarFiltros";
import { Toggle } from "@components/Toggle";
import { addFilter } from "../store/actions/addFilter";
import { connect } from "react-redux";

// @ts-ignore
@Translate
// @ts-ignore
@connect()
export class SidebarFilterPricing extends Component<SidebarFilterPricingProps> {
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
        const {models, brands} = this.state;
        return (
            <>
                <LimpiarFiltros/>
                <FilterContainer
                    onChange={(items, item, id) => {
                        console.log(items, item, id);
                    }}
                    options={[
                        {
                            icon: "fa fa-tag",
                            id: "marca",
                            placeholder: this.props.getTranslationKey("filterBrand"),
                            column: "brandColumn",
                            options: brands as IDropdownMenuPropsOption[]
                        }, {
                            icon: "fas fa-cube",
                            id: "modelo",
                            placeholder: this.props.getTranslationKey("filterModel"),
                            column: "modelColumn",
                            options: models as IDropdownMenuPropsOption[]
                        },
                        {
                            icon: "fas fa-car",
                            id: "motorizacion",
                            placeholder: this.props.getTranslationKey("filterEngine"),
                            column: "0",
                            options: option as IDropdownMenuPropsOption[]
                        },
                        {
                            icon: "fab fa-vuejs",
                            id: "version",
                            placeholder: this.props.getTranslationKey("filterVersion"),
                            column: "0",
                            options: option as IDropdownMenuPropsOption[]
                        },
                        {
                            icon: "fa fa-car-side",
                            id: "carroceria",
                            placeholder: this.props.getTranslationKey("filterFamily"),
                            column: "0",
                            options: option as IDropdownMenuPropsOption[]
                        },
                        {
                            icon: "fas fa-calendar-alt",
                            id: "año",
                            placeholder: "Año",
                            options: this.state.anio,
                            column: "yearColumn"
                        },
                        {
                            icon: "fa fa-check",
                            id: "situacionLogistica",
                            placeholder: this.props.getTranslationKey("filterAvailability"),
                            options: option as IDropdownMenuPropsOption[],
                            column: "0",
                        },
                        {
                            icon: "fa fa-sync-alt",
                            id: "rotacion",
                            placeholder: this.props.getTranslationKey("daysInStock"),
                            options: option as IDropdownMenuPropsOption[],
                            column: "0",
                        },
                        {
                            icon: "fa fa-map-marker",
                            id: "ubicacion",
                            placeholder: this.props.getTranslationKey("location"),
                            options: option as IDropdownMenuPropsOption[],
                            column: "0",
                        },
                        {
                            icon: "fa fa-address-card",
                            id: "numReferencia",
                            placeholder: this.props.getTranslationKey("filterReference"),
                            options: option as IDropdownMenuPropsOption[],
                            column: "0",
                        },
                        {
                            icon: "fa fa-address-card",
                            id: "prioridad",
                            placeholder: this.props.getTranslationKey("priority"),
                            options: option as IDropdownMenuPropsOption[],
                            column: "0",
                        },
                    ]}
                />
                <Toggle title={"Búsqueda Avanzada"}>
                    <FilterContainer
                        onChange={(_, item, id) => {
                            console.log(this);
                            this.props.dispatch(addFilter(id, item));
                        }}
                        options={[
                            {
                                icon: "fa fa-tag",
                                id: "combustible",
                                placeholder: this.props.getTranslationKey("filterFuel"),
                                column: "combustible",
                                options: brands as IDropdownMenuPropsOption[]
                            },
                            {
                                icon: "fas fa-cube",
                                id: "transmision",
                                placeholder: this.props.getTranslationKey("filterGear"),
                                column: "transmision",
                                options: models as IDropdownMenuPropsOption[]
                            },
                            {
                                icon: "fas fa-cube",
                                id: "pais",
                                placeholder: this.props.getTranslationKey("filterCountry"),
                                column: "pais",
                                options: models as IDropdownMenuPropsOption[]
                            },
                            {
                                icon: "fas fa-cube",
                                id: "co2",
                                placeholder: this.props.getTranslationKey("co2"),
                                column: "co2",
                                options: models as IDropdownMenuPropsOption[]
                            }, {
                                icon: "fas fa-cube",
                                id: "kms_desde",
                                placeholder: this.props.getTranslationKey("filterKmsFrom"),
                                column: "kms_desde",
                                options: models as IDropdownMenuPropsOption[]
                            }, {
                                icon: "fas fa-cube",
                                id: "kms_hasta",
                                placeholder: this.props.getTranslationKey("filterKmsTo"),
                                column: "kms_hasta",
                                options: models as IDropdownMenuPropsOption[]
                            },
                        ]}
                    />
                </Toggle>
            </>
        )
    }
}