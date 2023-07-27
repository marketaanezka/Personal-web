import { Box, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import DrawerMenu from "../Drawer/Drawer";
import Menu from "../Menu/Menu";
import styles from "./Header.module.scss";
import ToggleModeButton from "./ToggleModeButton";

const Header = () => {
  const color = useColorModeValue("#fafafa", "gray.800");

  return (
    <Box as="header" className={styles.wrapper} bg={color}>
      <div className={styles.header}>
        <Box as="span">
          <Link href="/">Willis dev</Link>
        </Box>
        <DrawerMenu />
        <Menu />
        <ToggleModeButton />
      </div>
    </Box>
  );
};

export default Header;
