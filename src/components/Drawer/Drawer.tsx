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
import MenuItem from "../Header/MenuItem";
import ToggleModeButton from "../Header/ToggleModeButton";
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
          <DrawerHeader>
            <ToggleModeButton />
          </DrawerHeader>

          <DrawerBody className={styles.drawerBody}>
            <div className={styles.content}>
              {Routes.map((route) => (
                <MenuItem
                  href={route.path}
                  isActive={router.pathname === route.path}
                  key={route.path}
                  onClick={onClose}
                >
                  {route.label}
                </MenuItem>
              ))}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
