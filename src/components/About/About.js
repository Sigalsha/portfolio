import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ABOUT_TXT } from "../../constants/about";
import ContactInfo from "../shared/ContactInfo";
import Title from "../shared/Title";
import "./About.css";

const About = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? "#1A2027" : "rgba(105, 94, 147, 0.3)",
    ...theme.typography.body2,
    padding: "1.2rem",
    textAlign: "center",
    color: "rgb(219, 219, 219)",
    fontSize: "0.85em",
    lineHeight: 1.5,
    letterSpacing: "0.07em",
    borderRadius: "5px"
  }));

  return (
    <div className="about-main-wrapper">
      <Title title="About Me" />
      <ul className="about-wrapper">
        {ABOUT_TXT.map((about) => (
          <li key={about.id} className="about-item">
            <p
              id={`${
                about.class !== "heart" ? "about-icon-wrapper" : "about-heart"
              }`}
            >
              <img
                className={`${about.class} about-icon`}
                src={about.img}
                alt={`${about.img}`}
              />
            </p>
            <p>{about.text}</p>
          </li>
        ))}
      </ul>
      <ContactInfo />
    </div>
  );
};

export default About;
