import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layouts/Layout/Layout";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import "../styles/prism.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
