import { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react";

const darkTheme = createTheme({
  type: "dark",
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
};

export default MyApp;
