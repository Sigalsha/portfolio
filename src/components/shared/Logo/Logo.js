import React, { useState } from "react";
import logo from "../../../assets/computer-internet-woman.svg";
import "./Logo.css";

const Logo = () => {
  return (
    <p className="logo">
      Sigal
      <img src={logo} alt="logo" />
    </p>
  );
};

export default Logo;
