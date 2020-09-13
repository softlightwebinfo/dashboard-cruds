import React, { Component } from "react";
import {
    BEM,
    ButtonComponent,
    ButtonIconComponent,
    IconComponent,
    TypographyComponent,
} from "@codeunic/library-ui/build";
import { ClickOutside } from "@components/ClickOutside";
import { IModalProps, IModalState } from "@props/IModalProps";
import { Loader } from "@components/Loader";

export class Modal extends Component<IModalProps, IModalState> {
    public state = {
        show: this.props.initial || false,
        loading: false,
    };

    constructor(props) {
        super(props);
    }

    public ToggleModal = () => {
        this.setState(e => ({show: !e.show, loading: false}));
    }

    private onSubmitCallback = (success: boolean) => {
        if (success) {
            this.loading();
            this.ToggleModal();
        } else {
            this.loading();
        }
    };

    private loading = () => {
        this.setState(e => ({loading: !e.loading}));
    }

    private onSubmit = () => {
        if (this.state.loading) return null;
        this.loading();
        this.props.onSubmit(this.onSubmitCallback);
    };

    render() {
        if (!this.state.show) return null;
        const bm = new BEM("Modal", {});
        return (
            <div className={bm.toString()}>
                <ClickOutside onClickOutside={this.onClick} className={bm.Children("dialog")}>
                    <header>
                        <TypographyComponent>{this.props.title}</TypographyComponent>
                        <ButtonIconComponent hover onClick={this.ToggleModal}>
                            <IconComponent icon={"close"}/>
                        </ButtonIconComponent>
                    </header>
                    <section>
                        {this.props.children}
                    </section>
                    <footer>
                        <ButtonComponent
                            onClick={this.onSubmit} variant={"outlined"}
                            theme={"success"}
                        >
                            {this.state.loading ? (
                                <>
                                    <Loader/>
                                    <span>Guardando</span>
                                </>
                            ) : "Guardar"}
                        </ButtonComponent>
                        <ButtonComponent
                            onClick={this.ToggleModal} variant={"outlined"}
                            theme={"danger"}
                        >
                            Cancelar
                        </ButtonComponent>
                    </footer>
                </ClickOutside>
            </div>
        );
    }

    onClick = () => {
        this.setState(e => ({show: !e.show}));
    }
}