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
    <Box as="header" className={styles.wrapper} bg={color} height="4.5rem">
      <div className={styles.header}>
        <Box as="span">
          <Link href="/" rel="noopener noreferrer">
            <span className={styles.name}>Markéta</span>
            <span className={styles.popColor}>Willis</span>
          </Link>
        </Box>
        {isSmallScreen ? <DrawerMenu /> : <Menu />}
      </div>
      <Divider />
    </Box>
  );
};

export default Header;
