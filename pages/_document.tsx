/* eslint-disable react/no-danger, import/no-unresolved */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="es">
                <Head>
                    <meta charSet="utf-8"/>
                    <link href="/static/css/index.css" rel="stylesheet"/>
                    <link href="/static/css/all.min.css" rel="stylesheet"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}
