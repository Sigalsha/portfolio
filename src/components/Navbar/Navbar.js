import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { NAV_LINKS } from "../../constants/links";
import LinkRoute from "../shared/LinkRoute/LinkRoute";
import "./Navbar.css";

const Navbar = (props) => {
  const { pathname } = useLocation();

  return (
    <nav
      className={`navbar-wrapper${
        props.isOpen ? " side-navbar" : " nav-close"
      }`}
    >
      {NAV_LINKS.map((link) => {
        return (
          <LinkRoute
            to={`/${link.to}`}
            name={link.name}
            icon={link.icon}
            key={link.id}
            isActive={
              `/${link.to}` === pathname ||
              (pathname === "/" && link.to === "home")
            }
            isSideNav={props.isOpen}
            className={props.isOpen ? "s-nav-link" : " left-space"}
          />
        );
      })}
    </nav>
  );
};

export default Navbar;
