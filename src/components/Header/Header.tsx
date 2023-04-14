import Link from "next/link";
import DrawerMenu from "../Drawer/Drawer";
import Menu from "../Menu/Menu";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <Link href="/">Willis dev</Link>
        <DrawerMenu />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
