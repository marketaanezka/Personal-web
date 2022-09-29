import Link from "next/link";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Link href="/">Willis dev</Link>
      <BurgerMenu />
    </header>
  );
};

export default Header;
