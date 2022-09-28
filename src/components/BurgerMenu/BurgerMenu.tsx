import React, { useState } from "react";
import FocusLock from "react-focus-lock";
import ClickAwayListener from "react-click-away-listener";
import MenuBar from "./MenuBar";
import Burger from "./Burger";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div>
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} />
          <MenuBar open={open} setOpen={setOpen} />
        </FocusLock>
      </div>
    </ClickAwayListener>
  );
};

export default BurgerMenu;
