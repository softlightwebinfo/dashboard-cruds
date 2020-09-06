import React, { Component } from "react";
import { connect } from "react-redux";
import { Auth } from "../Framework/hoc/Auth";
import { AuthLoginComponent, CardBoxComponent } from "@codeunic/library-ui/build";
import { Page } from "@components/Page";
// @ts-ignore
import { Router } from "@routes";

class Index extends Component<{
    translation: any;
}> {
    public state = {
        search: "",
    }

    static async getInitialProps(ctx) {
        const {isServer} = ctx;
        const store = ctx.store.getState();
        if (store.auth.isLogin) {
            if (ctx.res) {
                ctx.res.writeHead(302, {Location: '/'});
                return ctx.res.end();
            }
            Router.pushRoute('/');
            return;
        }
        return {
            isServer,
        };
    }

    componentDidMount() {
        // @ts-ignore
        const {isServer, translate, isLogin} = this.props;
        if (isLogin) {
            Router.pushRoute('/');
        }
        if (isServer && !translate) {
            //dispatch(ActionCreator.translationRequest("es"));
        }
    }

    render() {
        return (
            <Page background={"/static/images/background-login.jpg"}>
                <CardBoxComponent
                    title={"Welcome"}
                    description={"to the demo application made with AdminBro - the best admin framework for Node.js apps, based on React."}
                    footer={"Made with love by codeunic"}
                    image={"/static/images/dashboard.png"}
                >
                    <AuthLoginComponent
                        onChange={console.log} textOtherScreen={"Register"} footerAccountText={"Create Account"}
                        emailValue={""} passwordValue={""} onSubmit={console.log} title={"Login"}
                        subTitle={"Iniciar sesión"}
                    />
                </CardBoxComponent>
            </Page>
        )
    }
}

export default connect((state: any) => ({
    translation: state.translate.translation,
}))(Auth(Index));