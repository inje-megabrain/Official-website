import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@mui/styles";
import { Container } from '@mui/material';
import Header from "../components/header";
import Footer from "../components/footer";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="description" content="개발자의 지속 가능한 성장을 위한 학습 동아리, 메가브레인은 인제대학교 컴퓨터공학과 소속 학술동아리입니다." />
                    <meta name="theme-color" content="#3f51b5" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://megabrain.kr" />
                    <meta property="og:title" content="메가브레인" />
                    <meta property="og:image" content="/op_image.png" />
                    <meta property="og:description" content="개발자의 지속 가능한 성장을 위한 학습 동아리, 메가브레인은 인제대학교 컴퓨터공학과 소속 학술동아리입니다" />
                    <meta property="og:site_name" content="메가브레인" />
                    <meta property="og:locale" content="ko_KR" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="512x512"  href="/android-chrome-512x512.png" />
                    <link rel="icon" type="image/png" sizes="192x192"  href="/android-chrome-192x192.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <meta name="apple-mobile-web-app-title" content="메가브레인" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <body>
                <Container maxWidth='lg'>
                <Header />
                <Main />
                <NextScript />
                <Footer />
                </Container>
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async ctx => {
    const materialSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: App => props => materialSheets.collect(<App {...props} />)
        });

    const initialProps = await Document.getInitialProps(ctx);
    return {
        ...initialProps,
        styles: <>{initialProps.styles}</>
    };
};