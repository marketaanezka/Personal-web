import cx from "classnames";
import { Dispatch, SetStateAction } from "react";
import styles from "./Burger.module.scss";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Burger = ({ open, setOpen }: Props) => {
  return (
    <div aria-label="toggle menu">
      <button
        onClick={() => setOpen(!open)}
        className={cx(styles.wrapper, { [styles.blue]: open })}
      >
        B
      </button>
    </div>
  );
};

export default Burger;
