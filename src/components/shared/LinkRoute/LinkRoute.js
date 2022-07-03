import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LinkRoute.css";

const LinkRoute = (props) => {
  return (
    <Link
      className={`link ${props.className ? props.className : ""}${
        props.isActive ? " active-link" : ""
      }`}
      to={props.to}
    >
      {props.children}
      {props.name && <span className="link-title-btn">{props.name}</span>}
      {props.icon && (
        <FontAwesomeIcon className="link-icon right" icon={props.icon} />
      )}
    </Link>
  );
};

export default LinkRoute;
