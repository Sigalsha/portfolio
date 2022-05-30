import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Button.css";

const Button = ({ btnTxt, isWithIcon, iconType, onClick }) => {
  return (
    <button className="shared-btn" type="button" onClick={onClick}>
      {btnTxt}
      {isWithIcon && <FontAwesomeIcon icon={iconType} />}
    </button>
  );
};

export default Button;
