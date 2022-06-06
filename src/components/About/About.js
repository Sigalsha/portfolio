import React, { useState } from "react";
import { ABOUT_TXT } from "../../constants/about";
import ContactInfo from "../shared/ContactInfo";
import Title from "../shared/Title";
import "./About.css";

const About = () => {
  const paragraph = (
    <>
      {ABOUT_TXT.map((para, i) => {
        return (
          <div className="about-desc" key={i}>
            {para}
          </div>
        );
      })}
    </>
  );

  return (
    <div className="about-main-wrapper">
      <Title title="About Me" />
      <article className="about-container">
        {paragraph}
        {/* <p className="about-desc">
          <span className="about-bracket-left">&#10100;</span>
          I’m a full stack developer located in Israel.
          <span className="about-bracket-right">&#10101;</span>
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
        <p className="about-desc">Love to code, love to create.</p> */}
      </article>
      <ContactInfo />
    </div>
  );
};

export default About;
