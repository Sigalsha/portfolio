import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faBriefcase,
  faHome,
  faLaptopCode,
  faSquarePhone
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
      <a href="#skills" className="nav-link">
        <FontAwesomeIcon icon={faLaptopCode} />
        Tech Skills
      </a>
      <a href="#projects" className="nav-link">
        <FontAwesomeIcon icon={faBriefcase} />
        Projects
      </a>
      <a href="#contact" className="nav-link">
        <FontAwesomeIcon icon={faSquarePhone} />
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
