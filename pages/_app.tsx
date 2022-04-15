import "../styles/index.scss";
import { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import Script from "next/script";

const darkTheme = createTheme({
  type: "dark",
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
      <Script
        defer
        data-domain="fyralabs.com"
        src="https://analytics.fyralabs.com/js/plausible.js"
      />
    </NextUIProvider>
  );
};

export default MyApp;
