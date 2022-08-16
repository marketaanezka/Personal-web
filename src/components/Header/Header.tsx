import styles from "../../styles/components/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <span>Willis dev</span>
      <div>burger menu</div>
    </header>
  );
};

export default Header;
