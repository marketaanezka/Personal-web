import Link from "next/link";
import styles from "./Menu.module.scss";
import { useRouter } from "next/router";
import { Routes } from "../../utils/const";
import ToggleModeButton from "../Header/ToggleModeButton";

const Menu = () => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      {Routes.map((route) => (
        <Link
          href={route.path}
          className={router.pathname === route.path ? styles.isActive : ""}
          key={route.path}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
