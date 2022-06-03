import React, { useState } from "react";

import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../shared/Button";
import LinkRoute from "../shared/LinkRoute/LinkRoute";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <header>
        <p className="landing-intro">Hi, I'm</p>
        <h1 className="landing-title">Sigal Shalit Manor</h1>
        <h1 className="landing-sub-title">Full Stack Developer</h1>
      </header>
      <LinkRoute
        to="/About"
        name="Find Out More"
        icon={faCircleRight}
        isBtnLike="true"
      />
    </div>
  );
};

export default Landing;
