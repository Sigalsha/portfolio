import React, { useContext } from "react";
import { MenuContext } from "../../contexts/MenuContext";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  const { onMenuClick, open } = useContext(MenuContext);

  const burgerLine = (
    <span className={`burger-menu-line ${open && " close-burger-menu"}`}></span>
  );

  return (
    <button
      className="burger-menu-container"
      open={open}
      onClick={() => onMenuClick()}
    >
      <div
        className={`burger-menu-wrapper ${open && " menu-active"}`}
        open={open}
      >
        {burgerLine}
        {burgerLine}
        {burgerLine}
      </div>
    </button>
  );
};

export default BurgerMenu;
