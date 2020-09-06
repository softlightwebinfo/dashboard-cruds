import React, { Component } from "react";
import { connect } from "react-redux";
import { Auth } from "../Framework/hoc/Auth";
import { Template } from "@components/Template";
import { BoxComponent, ButtonComponent, SectionBoxComponent } from "@codeunic/library-ui/build";
import { getProjects } from "../Framework/store/dispatch/project";

class Index extends Component<{
    translation: any;
}> {
    public state = {
        search: "",
    }

    static async getInitialProps(ctx) {
        const {isServer, store} = ctx;
        await store.dispatch(getProjects());
        return {
            isServer,
        };
    }

    componentDidMount() {
        // @ts-ignore
        const {isServer, translate} = this.props;

        if (isServer && !translate) {
            //dispatch(ActionCreator.translationRequest("es"));
        }
    }

    render() {
        return (
            <Template
                title={"Page principal"}
            >
                <SectionBoxComponent
                    header={{
                        center: {
                            title: "Welcome on Board",
                            description: "Now you are one of us! We prepared a few tips for you to start:"
                        },
                        left: {
                            image: "https://images.vexels.com/media/users/3/145821/isolated/preview/44247e29bf035ece825b8b2bf8af88c2-ilustraci--n-de-cohete-ilustraci--n-de-cohete-by-vexels.png",
                            title: "Cohete"
                        },
                        right: {
                            image: "https://toppng.com/public/uploads/thumbnail/luna-animada-png-luna-11562938469r8pzcrmu7c.png",
                            title: "Luna"
                        }
                    }}
                >
                    <BoxComponent
                        title={"Adding Ressources"}
                        description={"How to add new resources to the sidebar"}
                        image={"https://image.flaticon.com/icons/png/512/733/733230.png"}
                    />
                    <BoxComponent
                        title={"Adding Ressources"}
                        description={"How to add new resources to the sidebar"}
                        image={"https://image.flaticon.com/icons/png/512/733/733230.png"}
                    />
                    <BoxComponent
                        title={"Adding Ressources"}
                        description={"How to add new resources to the sidebar"}
                        image={"https://image.flaticon.com/icons/png/512/733/733230.png"}
                    />
                    <BoxComponent
                        title={"Adding Ressources"}
                        description={"How to add new resources to the sidebar"}
                        image={"https://image.flaticon.com/icons/png/512/733/733230.png"}
                    />
                    <BoxComponent
                        title={"Adding Ressources"}
                        description={"How to add new resources to the sidebar"}
                        image={"https://image.flaticon.com/icons/png/512/733/733230.png"}
                    />
                    <BoxComponent
                        title={"Adding Ressources"}
                        description={"How to add new resources to the sidebar"}
                        image={"https://image.flaticon.com/icons/png/512/733/733230.png"}
                    />
                    <BoxComponent
                        isRow
                        title={"Adding Ressources"}
                        description={"How to add new resources to the sidebar"}
                        image={"https://image.flaticon.com/icons/png/512/733/733230.png"}
                    />
                    <BoxComponent
                        isRow
                        title={"Adding Ressources"}
                        description={"How to add new resources to the sidebar"}
                        image={"https://image.flaticon.com/icons/png/512/733/733230.png"}
                    />
                    <BoxComponent
                        isFull
                        title={"Adding Ressources"}
                        description={"How to add new resources to the sidebar"}
                        image={"https://image.flaticon.com/icons/png/512/733/733230.png"}
                    >
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: 20,
                        }}>
                            <ButtonComponent theme={"primary"}>Contact US</ButtonComponent>
                        </div>
                    </BoxComponent>
                </SectionBoxComponent>
            </Template>
        )
    }
}

export default connect((state: any) => ({
    translation: state.translate.translation,
}))(Auth(Index));