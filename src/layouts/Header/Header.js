import React, { useState, useContext } from "react";
import { MenuContext } from "../../contexts/MenuContext";
import Logo from "../../components/shared/Logo";
import Navbar from "../../components/Navbar";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import "./Header.css";

const Header = () => {
  const { open } = useContext(MenuContext);
  return (
    <header className="header-container" open={open}>
      <Logo />
      <Navbar isOpen={open} />
      <BurgerMenu />
    </header>
  );
};

export default Header;
