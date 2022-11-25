import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { DefaultSeo } from "next-seo";

const DEFAULT_SEO = {
  title: "Megabrain",
  description: "개발자의 지속 가능한 성장을 위한 동아리, 메가브레인",
  canonical: "https://www.megabrain.kr",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.megabrain.kr",
    title: "메가브레인",
    site_name: "Megabrain",
    // images: [
    //   {
    //     url: "카카오톡, 페이스북에에 링크 넣으면 올라올 이미지",
    //     width: 285,
    //     height: 167,
    //     alt: "이미지"
    //   }
    // ]
  },
  twitter: {
    handle: "@megabrain",
    site: "@megabrain",
    cardType: "summary_large_image",
  },
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <DefaultSeo {...DEFAULT_SEO} />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
