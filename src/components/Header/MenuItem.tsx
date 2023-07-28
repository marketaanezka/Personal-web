import Link from "next/link";
import { FC, ReactNode } from "react";
import styles from "./MenuItem.module.scss";

interface MenuItemProps {
  href: string;
  isActive: boolean;
  key: string;
  children: ReactNode;
  onClick?: () => void;
}

const MenuItem: FC<MenuItemProps> = ({
  href,
  isActive,
  key,
  children,
  onClick,
}) => {
  return (
    <Link
      href={href}
      className={`${styles.link} ${isActive ? styles.isActive : ""}`}
      key={key}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default MenuItem;
