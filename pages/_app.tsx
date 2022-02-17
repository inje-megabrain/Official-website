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
                <meta name="description" content="개발자의 지속 가능한 성장을 위한 학습 동아리, 메가브레인은 인제대학교 컴퓨터공학과 소속 학술동아리입니다." />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="theme-color" content="#2196f3" />
            </Head>
            <CssBaseline />
            <Component {...pageProps} />
        </>
    );
};

export default App;