import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../../components/Header/Header";
import Footer from "./footer";
import styles from "./Layout.module.scss";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Head>
        <title>Markéta Willis</title>
        <meta name="description" content="Přečtěte si tipy ze světa IT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Box as="main" className={styles.wrapper}>
        {children}
      </Box>
      <Footer />
    </div>
  );
};

export default Layout;
