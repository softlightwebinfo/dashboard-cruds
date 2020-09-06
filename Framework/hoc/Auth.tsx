import { Component } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
// @ts-ignore
import { Router } from '@routes';

export function Auth(WrappedComponent) {
// @ts-ignore
    @connect((state: any) => ({
        auth: state.auth.auth,
        isLogin: state.auth.auth != null,
    }))
    class Index extends Component<{
        isLogin: boolean;
        auth: any;
    }> {
        static async getInitialProps(ctx) {
            const store = ctx.store.getState();
            if (!store.auth.isLogin) {
                if (ctx.res) {
                    ctx.res.writeHead(302, {Location: '/login'});
                    return ctx.res.end();
                }
                Router.pushRoute('/login');
                return;
            }
            return WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));
        }

        constructor(props) {
            super(props);
        }

        componentDidMount() {
            if (!this.props.isLogin) {
                Router.pushRoute('/login');
            }
        }

        render() {
            if (this.props.isLogin) {
                return <WrappedComponent {...this.props} />;
            }
            return null;
            // return <Login/>
        }
    }

    return Index;
}
