import {
  Box,
  Divider,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import DrawerMenu from "../Drawer/Drawer";
import Menu from "../Menu/Menu";
import styles from "./Header.module.scss";

const Header = () => {
  const color = useColorModeValue("gray.100", "gray.800");
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");

  return (
    <Box as="header" className={styles.wrapper} bg={color}>
      <div className={styles.header}>
        <Box as="span">
          <Link href="/">Willis dev</Link>
        </Box>
        {isSmallScreen ? <DrawerMenu /> : <Menu />}
      </div>
      <Divider />
    </Box>
  );
};

export default Header;
