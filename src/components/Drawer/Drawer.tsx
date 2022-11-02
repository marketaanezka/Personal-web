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
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <div className={styles.content}>
              <Link href="/">
                <a onClick={onClose}>Home</a>
              </Link>
              <Link href="/about">
                <a onClick={onClose}>About me</a>
              </Link>
              <Link href="/featured">
                <a onClick={onClose}>Featured In</a>
              </Link>
              <Link href="/skills">
                <a onClick={onClose}>My skills</a>
              </Link>
              <Link href="/portfolio">
                <a onClick={onClose}>Portfolio</a>
              </Link>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
