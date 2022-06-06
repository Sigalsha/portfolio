import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../components/shared/Logo";
import footerLogo from "../../assets/computer-internet-woman.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <span className="footer-logo footer-left">
        <Logo />
      </span>
      <FontAwesomeIcon icon={faCopyright} className="footer-copyright" />
      Developed by Sigal Shalit Manor 2022
      <span className="footer-logo footer-right">
        <Logo />
      </span>
    </div>
  );
};

export default Footer;
