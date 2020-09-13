import React, { Component } from "react";
import { connect } from "react-redux";
import { AuthLoginComponent, CardBoxComponent } from "@codeunic/library-ui/build";
import { Page } from "@components/Page";
// @ts-ignore
import { Router } from "@routes";
import { auth } from "../Framework/store/dispatch/auth";

class Index extends Component<{
    translation: any;
    dispatch: any;
    isLogin: boolean;
}> {
    public state = {
        search: "",
        email: "",
        password: "",
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

    componentDidUpdate(prevProps) {
        const {isLogin} = this.props;
        if (!prevProps.isLogin && isLogin) {
            Router.pushRoute('/');
        }
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

    onChange = (evt) => this.setState({[evt.target.id]: evt.target.value})

    submit = (evt) => {
        evt.preventDefault();
        if (!this.state.email.length || !this.state.password.length) {
            return;
        }
        this.props.dispatch(auth(this.state.email, this.state.password));
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
                        onChange={this.onChange} textOtherScreen={"Register"} footerAccountText={"Create Account"}
                        emailValue={this.state.email} passwordValue={this.state.password} onSubmit={this.submit}
                        title={"Login"}
                        subTitle={"Iniciar sesión"}
                    />
                </CardBoxComponent>
            </Page>
        )
    }
}

export default connect((state: any) => ({
    translation: state.translate.translation,
    isLogin: state.auth.isLogin,
}))(Index);