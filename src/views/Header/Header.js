import React, { useState } from "react";
import Logo from "../../components/shared/Logo";
import Navbar from "../../components/shared/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
