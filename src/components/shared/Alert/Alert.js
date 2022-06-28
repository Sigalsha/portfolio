import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import "./Alert.css";

const Alert = ({ isSuccess, headerText, text, toggleAlert }) => {
  return (
    <div
      className={`alert-container${!isSuccess ? " alert-fail" : ""}`}
      onClick={toggleAlert}
    >
      <p className={`alert-text${isSuccess ? " alert-success" : ""}`}>
        <span>
          <FontAwesomeIcon icon={isSuccess ? faFaceSmile : faFaceFrown} />
          {headerText}
        </span>
        {text}
      </p>
    </div>
  );
};

export default Alert;
