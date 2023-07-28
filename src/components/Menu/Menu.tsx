import Link from "next/link";
import styles from "./Menu.module.scss";
import { useRouter } from "next/router";
import { Routes } from "../../utils/const";
import ToggleModeButton from "../Header/ToggleModeButton";
import MenuItem from "../Header/MenuItem";

const Menu = () => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      {Routes.map((route) => (
        <MenuItem
          href={route.path}
          isActive={router.pathname === route.path}
          key={route.path}
        >
          {route.label}
        </MenuItem>
      ))}
      <ToggleModeButton />
    </div>
  );
};

export default Menu;
