import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./LinkRoute.css";

const LinkRoute = (props) => {
  const location = useLocation();
  return (
    <Link className={`link ${props.isBtnLike ? "btn-like" : ""}`} to={props.to}>
      {props.children}
      {props.icon && !props.isBtnLike && (
        <FontAwesomeIcon className="link-icon" icon={props.icon} />
      )}
      {props.name && (
        <span
          className={`${props.isBtnLike ? "link-title-btn" : "link-title"}`}
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
// isActiveRoute={props.to === location.pathname}
