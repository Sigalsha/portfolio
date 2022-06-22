import React from "react";
import { ABOUT_TXT } from "../../constants/about";
import ContactInfo from "../shared/ContactInfo";
import Title from "../shared/Title";
import "./About.css";

const About = () => {
  return (
    <div className="page-container">
      <Title title="About Me" />
      <ul className="about-wrapper">
        {ABOUT_TXT.map((about) => (
          <li key={about.id} className="about-item">
            <img
              className={`${about.class} about-icon`}
              src={about.img}
              alt={`${about.class === "about-logo" ? "about-logo" : about.img}`}
            />
            <p className="about-desc">{about.text}</p>
          </li>
        ))}
      </ul>
      <ContactInfo />
    </div>
  );
};

export default About;
