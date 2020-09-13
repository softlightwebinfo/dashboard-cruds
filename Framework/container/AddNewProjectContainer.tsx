import React, { Component, createRef } from "react";
import { AddNewProject } from "@components/AddNewProject";
import { connect } from "react-redux";
import { Modal } from "@components/Modal";
import { Form, FormLayout } from "@codeunic/library-ui";
import { images } from "@config/images";
import { GridComponent } from "@codeunic/library-ui/build";
import { submitProject } from "../store/dispatch/project";

// @ts-ignore
@connect(state => state)
export class AddNewProjectContainer extends Component<any, any> {
    private refModal: any;
    private formRef: any;

    constructor(props) {
        super(props);
        this.refModal = createRef();
        this.formRef = createRef();
    }

    get form() {
        const form = new Form("addNewProject");
        const components = form.Component();
        form
            .Add(
                form.Group({form: true}).Add(
                    components.Input({
                        id: "name",
                        placeholder: "Nombre del proyecto",
                        autoFocus: true,
                        name: "name",
                        outline: true,
                    })
                ),
            )
            .Add(
                form.Group({form: true}).Add(
                    components.Input({
                        id: "host",
                        placeholder: "Host",
                        name: "host",
                        outline: true,
                    })
                ),
            )
            .Add(
                form.Group({form: true}).Add(
                    components.Input({
                        id: "username",
                        placeholder: "Username",
                        name: "username",
                        outline: true,
                    })
                ),
            )
            .Add(
                form.Group({form: true}).Add(
                    components.Input({
                        id: "password",
                        placeholder: "Password",
                        name: "password",
                        outline: true,
                        type: "password"
                    })
                ),
            )
            .Add(
                form.Group({form: true}).Add(
                    components.Input({
                        id: "database",
                        placeholder: "Database",
                        name: "database",
                        outline: true,
                    })
                ),
            )

        return form;
    }

    onSubmit = (callback) => {
        const values = this.formRef.current.state.values;
        this.props.dispatch(submitProject(values, callback));
    };

    render() {
        return (
            <>
                <AddNewProject
                    title={"Crea un nuevo proyecto"}
                    onClick={this.onClick}
                />
                <Modal onSubmit={this.onSubmit} ref={this.refModal} title={"Crear un nuevo proyecto"} initial={false}>
                    <GridComponent container spacing={2}>
                        <GridComponent item xs={12} sm={6}>
                            <img
                                style={{maxWidth: 300, width: "100%", display: "block"}} src={images.formAddProject}
                                alt={"Nuevo proyecto"} title={"Nuevo proyecto"}
                            />
                        </GridComponent>
                        <GridComponent item xs={12} sm={6}>
                            <FormLayout
                                onSubmit={this.onSubmit}
                                ref={this.formRef}
                                form={this.form}
                            />
                        </GridComponent>
                    </GridComponent>
                </Modal>
            </>
        );
    }

    onClick = () => {
        this.refModal.current.ToggleModal();
    }
}