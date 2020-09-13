import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import wrapper from '../Framework/store/store';
import { authInitial } from "../Framework/store/dispatch/auth";

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        const {store} = ctx;
        // await store.dispatch(changeLanguage({language: 'es'}));
        // @ts-ignore
        await store.dispatch(authInitial(ctx.req ? ctx.req.headers.cookie : undefined));
        const pageProps = {
            ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        };
        return {pageProps};
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {Component, pageProps} = this.props;
        return (
            <>
                <Head>
                    <title>My page</title>
                </Head>
                <Component {...pageProps} />
            </>
        );
    }
}

export default wrapper.withRedux(MyApp);
