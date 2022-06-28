import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { MenuContext } from "../../contexts/MenuContext";
import { NAV_LINKS } from "../../constants/links";
import LinkRoute from "../shared/LinkRoute/LinkRoute";
import "./Navbar.css";

const Navbar = (props) => {
  const { pathname } = useLocation();
  const { onMenuClick } = useContext(MenuContext);

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
            onClick={() => onMenuClick()}
          />
        );
      })}
    </nav>
  );
};

export default Navbar;
