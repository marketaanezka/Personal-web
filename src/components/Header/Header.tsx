import Link from "next/link";
import DrawerMenu from "../Drawer/Drawer";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Link href="/">Willis dev</Link>
      <DrawerMenu />
    </header>
  );
};

export default Header;
