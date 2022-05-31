import React, { useState } from "react";

import { NAV_LINKS } from "../../../constants/links";
import LinkRoute from "../Link/Link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      {NAV_LINKS.map((link) => {
        return (
          <LinkRoute
            to={link.to}
            name={link.name}
            icon={link.icon}
            key={link.id}
            isLogo={false}
          />
        );
      })}
    </nav>
  );
};

export default Navbar;
