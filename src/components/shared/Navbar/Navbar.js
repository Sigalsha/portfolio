import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBriefcase,
  faHome,
  faMobileRetro
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <a href="#" className="nav-link">
        <FontAwesomeIcon icon={faHome} />
        Home
      </a>
      <a href="#about" className="nav-link">
        <FontAwesomeIcon icon={faAddressCard} />
        About
      </a>
      <a href="#projects" className="nav-link">
        <FontAwesomeIcon icon={faBriefcase} />
        Projects
      </a>
      <a href="#contact" className="nav-link">
        <FontAwesomeIcon icon={faMobileRetro} />
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
