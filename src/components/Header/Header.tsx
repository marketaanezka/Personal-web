import Link from "next/link";
import DrawerMenu from "../Drawer/Drawer";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <Link href="/">Willis dev</Link>
        <DrawerMenu />
      </div>
    </header>
  );
};

export default Header;
