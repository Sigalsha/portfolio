import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/about/about_logo.png";
import "./Logo.css";

const Logo = ({ isFooter }) => {
  return (
    <Link to="/">
      <p className="logo">
        Sigal
        {!isFooter && <img src={logo} alt="logo" />}
      </p>
    </Link>
  );
};

export default Logo;
