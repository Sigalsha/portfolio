import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../shared/LinkRoute/LinkRoute.css";

const NavbarLink = ({
  to,
  name,
  icon,
  key,
  className,
  onClick,
  isSideNav,
  isActive
}) => {
  return (
    <NavLink
      to={to}
      name={name}
      icon={icon}
      key={key}
      className={`link ${className ? className : ""}${
        isActive ? " active-link" : ""
      }`}
      onClick={isSideNav && onClick}
    >
      <FontAwesomeIcon
        className={isSideNav ? "s-nav-icon" : "link-icon"}
        icon={icon}
      />
      <span className={`${isSideNav ? "s-nav-link-title" : "link-title"}`}>
        {name}
      </span>
    </NavLink>
  );
};

export default NavbarLink;
