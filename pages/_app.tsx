import '../styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';

// @ts-ignore
function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;