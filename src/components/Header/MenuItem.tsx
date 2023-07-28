import { useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { FC, ReactNode } from "react";
import styles from "./MenuItem.module.scss";

interface MenuItemProps {
  href: string;
  isActive: boolean;
  key: string;
  children: ReactNode;
}

const MenuItem: FC<MenuItemProps> = ({ href, isActive, key, children }) => {
  const { colorMode } = useColorMode();

  return (
    <Link
      href={href}
      className={`${isActive ? styles.isActive : styles.hoverEffect} ${
        colorMode === "light" ? styles.lightMode : styles.darkMode
      }`}
      key={key}
    >
      {children}
    </Link>
  );
};

export default MenuItem;
