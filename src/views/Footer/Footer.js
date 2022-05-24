import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <FontAwesomeIcon icon={faCopyright} />
      Developed by Sigal Shalit Manor 2022
    </div>
  );
};

export default Footer;
