import React, { useState } from "react";
import ContactInfo from "../shared/ContactInfo";
import Title from "../shared/Title";
import "./About.css";

const About = () => {
  return (
    <div className="about-main-wrapper">
      <Title title="About Me" />
      <div className="about-container">
        <p className="about-desc">
          I’m a full stack developer located in Israel.{" "}
        </p>
        <p className="about-desc">
          Creative, autodidact, a great team-player and always strive to learn
          by doing.
        </p>
        <p className="about-desc">
          I have great passion for building end-to-end apps.
          <br />
          Writing high-quality, clean, scalable and maintainable code.
          <br />
          Developing responsive, dynamic and user-friendly layouts.
        </p>
        <p className="about-desc">Love to code, love to create.</p>
      </div>
      <ContactInfo />
    </div>
  );
};

export default About;
