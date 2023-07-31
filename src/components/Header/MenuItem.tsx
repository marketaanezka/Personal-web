import Link from "next/link";
import { FC, ReactNode } from "react";
import styles from "./MenuItem.module.scss";

interface MenuItemProps {
  href: string;
  isActive: boolean;
  children: ReactNode;
  onClick?: () => void;
}

const MenuItem: FC<MenuItemProps> = ({ href, isActive, children, onClick }) => {
  return (
    <Link
      href={href}
      className={`${styles.link} ${isActive ? styles.isActive : ""}`}
      key={href}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default MenuItem;
