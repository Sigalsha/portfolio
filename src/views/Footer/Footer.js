import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import footerLogo from "../../assets/logo-title.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <FontAwesomeIcon icon={faCopyright} />
      Developed by Sigal Shalit Manor 2022
      <img className="footer-logo" src={footerLogo} alt="footer-logo" />
    </div>
  );
};

export default Footer;
