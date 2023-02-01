import { RefObject } from "react";
import styles from "./DrawerButton.module.scss";

type Props = {
  onOpen: () => void;
  btnRef: RefObject<HTMLButtonElement>;
};

const DrawerButton = ({ onOpen, btnRef }: Props) => {
  return (
    <div className={styles.drawerButton}>
      <button
        aria-label="open menu"
        ref={btnRef}
        onClick={onOpen}
        className={styles.toggler}
      >
        <div></div>
      </button>
    </div>
  );
};

export default DrawerButton;
