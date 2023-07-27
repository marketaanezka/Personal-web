import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { RefObject } from "react";
import styles from "./DrawerButton.module.scss";

type Props = {
  onOpen: () => void;
  btnRef: RefObject<HTMLButtonElement>;
};

const DrawerButton = ({ onOpen, btnRef }: Props) => {
  return (
    <Button
      aria-label="open menu"
      ref={btnRef}
      onClick={onOpen}
      fontWeight="light"
    >
      Menu
    </Button>
  );
};

export default DrawerButton;
