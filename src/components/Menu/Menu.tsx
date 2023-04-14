import Link from "next/link";
import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">Home</Link>
      <Link href="/about">About me</Link>
      <Link href="/featured">Featured In</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/portfolio">Portfolio</Link>
    </div>
  );
};

export default Menu;
