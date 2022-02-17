import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import Head from 'next/head'
import React from "react";

const App = (props: AppProps) => {
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <title>메가브레인</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <CssBaseline />
            <Component {...pageProps} />
        </>
    );
};

export default App;