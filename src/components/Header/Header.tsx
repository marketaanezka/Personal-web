import BurgerMenu from "../BurgerMenu/BurgerMenu";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <span>Willis dev</span>
      <BurgerMenu />
    </header>
  );
};

export default Header;
