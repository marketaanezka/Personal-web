import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layouts/Layout/Layout";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import "../styles/prism.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag("config", "G-FEGCNQWR77", {
        page_path: url,
      });
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
