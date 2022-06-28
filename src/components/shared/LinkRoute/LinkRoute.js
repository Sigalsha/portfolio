import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./LinkRoute.css";

const LinkRoute = (props) => {
  console.log(props);
  return (
    <Link
      className={`link ${props.className ? props.className : ""}${
        props.isActive ? " active-link" : ""
      }`}
      to={props.to}
      onClick={props.onClick}
    >
      {props.children}
      {props.icon && !props.isBtnLike && (
        <FontAwesomeIcon
          className={props.isSideNav ? "s-nav-icon" : "link-icon"}
          icon={props.icon}
        />
      )}
      {props.name && (
        <span
          className={`${
            props.isBtnLike
              ? "link-title-btn"
              : props.isSideNav
              ? "s-nav-link-title"
              : "link-title"
          }`}
        >
          {props.name}
        </span>
      )}
      {props.isBtnLike && props.icon && (
        <FontAwesomeIcon className="link-icon right" icon={props.icon} />
      )}
    </Link>
  );
};

export default LinkRoute;
//
