import cx from "classnames";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import styles from "./MenuBar.module.scss";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const MenuBar = ({ open, setOpen }: Props) => {
  return (
    <aside className={cx(styles.menubar, { [styles.border]: open })}>
      <Link href="/about">
        <a onClick={() => setOpen(false)}>About me</a>
      </Link>
      <Link href="/featured">
        <a onClick={() => setOpen(false)}>Featured In</a>
      </Link>
      <Link href="/skills">
        <a onClick={() => setOpen(false)}>My skills</a>
      </Link>
      <Link href="/portfolio">
        <a onClick={() => setOpen(false)}>Portfolio</a>
      </Link>
    </aside>
  );
};

export default MenuBar;
