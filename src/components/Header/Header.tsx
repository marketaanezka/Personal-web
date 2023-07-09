import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import DrawerMenu from "../Drawer/Drawer";
import Menu from "../Menu/Menu";
import styles from "./Header.module.scss";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="header" className={styles.wrapper}>
      <div className={styles.header}>
        <Link href="/">Willis dev</Link>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
        <DrawerMenu />
        <Menu />
      </div>
    </Box>
  );
};

export default Header;
