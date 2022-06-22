import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { NAV_LINKS } from "../../../constants/links";
import LinkRoute from "../LinkRoute/LinkRoute";
import "./Navbar.css";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="navbar-wrapper">
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
            className="left-space"
          />
        );
      })}
    </nav>
  );
};

export default Navbar;
