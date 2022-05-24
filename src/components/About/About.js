import React, { useState } from "react";
import TechSkills from "../TechSkills";
import ContactInfo from "../shared/ContactInfo";
import "./About.css";

const About = () => {
  return (
    <div className="about-main-wrapper">
      <div className="about-container">
        <div>
          I’m a full stack developer located in Israel. Creative Autodidact
          learn by doing attention to details great team-player love to code,
          love to create.
        </div>
        <ContactInfo />
      </div>
      <TechSkills />
    </div>
  );
};

export default About;
