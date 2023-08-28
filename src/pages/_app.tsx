import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layouts/Layout/Layout";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme";
import "../styles/prism.css";

function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter();
  // useEffect(() => {
  //   const handleRouteChange = (url: string) => {
  //     window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
  //       page_path: url,
  //     });
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
