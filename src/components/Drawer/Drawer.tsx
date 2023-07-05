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
import { useRouter } from "next/router";
import React, { RefObject } from "react";
import { Routes } from "../../utils/const";
import styles from "./Drawer.module.scss";
import DrawerButton from "./DrawerButton";

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef() as RefObject<HTMLButtonElement>;
  const router = useRouter();

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
        <DrawerContent>
          <DrawerCloseButton sx={{ width: "2rem", height: "2rem" }} />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <div className={styles.content}>
              {Routes.map((route) => (
                <Link
                  href={route.path}
                  className={
                    router.pathname === route.path ? styles.isActive : ""
                  }
                  key={route.path}
                  onClick={onClose}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
