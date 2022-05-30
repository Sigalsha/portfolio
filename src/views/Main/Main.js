import React, { useState } from "react";
import Landing from "../../components/Landing";
import About from "../../components/About";
import TechSkills from "../../components/TechSkills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import "./Main.css";

const Main = () => {
  const isLanding = false;
  return (
    <div className="main-container">
      {isLanding ? (
        <Landing />
      ) : (
        <>
          {/* <About /> */}
          {/*  <TechSkills /> */}
          <Projects />
          {/* <Contact /> */}
        </>
      )}
    </div>
  );
};

export default Main;
