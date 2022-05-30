import React, { useState } from "react";

import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import "./Landing.css";
import Button from "../shared/Button";

const Landing = () => {
  return (
    <div className="landing-container">
      <header>
        <p className="landing-intro">Hi, I'm</p>
        <h1 className="landing-title">Sigal Shalit Manor</h1>
        <h1 className="landing-sub-title">Full Stack Developer</h1>
      </header>
      <Button
        btnTxt="Find Out More"
        isWithIcon="true"
        iconType={faCircleRight}
      />
    </div>
  );
};

export default Landing;
