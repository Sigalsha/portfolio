import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Link.css";

const LinkRoute = (props) => {
  const location = useLocation();
  return (
    <Link className="link" to={props.to}>
      {props.children}
      {props.icon && (
        <FontAwesomeIcon className="link-icon" icon={props.icon} />
      )}
      {props.name && <span className="link-title">{props.name}</span>}
    </Link>
  );
};

export default LinkRoute;
// isActiveRoute={props.to === location.pathname}
