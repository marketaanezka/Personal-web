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
    <div className={styles.wrapper}>
      <DrawerButton onOpen={onOpen} btnRef={btnRef} />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent sx={{ backgroundColor: "#f4f0eb" }}>
          <DrawerCloseButton sx={{ width: "2rem", height: "2rem" }} />
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
              <Link href="/blog" onClick={onClose}>
                Blog
              </Link>
              <Link href="/portfolio" onClick={onClose}>
                Portfolio
              </Link>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
