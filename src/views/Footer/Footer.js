import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faCopyright} />
      Developed by Sigal Shalit Manor 2022
    </div>
  );
};

export default Footer;
