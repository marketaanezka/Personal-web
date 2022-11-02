import Link from "next/link";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import DrawerMenu from "../Drawer/Drawer";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Link href="/">Willis dev</Link>
      {/* <BurgerMenu /> */}
      <DrawerMenu />
    </header>
  );
};

export default Header;
