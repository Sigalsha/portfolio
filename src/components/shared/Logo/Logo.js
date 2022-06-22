import React, { useState } from "react";
import logo from "../../../assets/about/about_logo.png";
import "./Logo.css";

const Logo = ({ isFooter }) => {
  return (
    <p className="logo">
      Sigal
      {!isFooter && <img src={logo} alt="logo" />}
    </p>
  );
};

export default Logo;
