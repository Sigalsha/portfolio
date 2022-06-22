import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import "./Alert.css";

const Alert = ({ isSuccess, headerText, text, toggleAlert }) => {
  return (
    <div className={`alert-container`} onClick={toggleAlert}>
      <p className={`${isSuccess ? "alert-success" : ""} alert-text`}>
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
