import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { RefObject } from "react";
import styles from "./Drawer.module.scss";
import DrawerButton from "./DrawerButton";

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef() as RefObject<HTMLButtonElement>;

  return (
    <>
      <DrawerButton onOpen={onOpen} btnRef={btnRef} />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton sx={{ width: "1rem", height: "1rem" }} />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <div className={styles.content}>
              <Link href="/" onClick={onClose}>
                Home
              </Link>
              <Link href="/about" onClick={onClose}>
                About me
              </Link>
              <Link href="/featured" onClick={onClose}>
                Featured In
              </Link>
              <Link href="/skills" onClick={onClose}>
                My skills
              </Link>
              <Link href="/portfolio" onClick={onClose}>
                Portfolio
              </Link>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
