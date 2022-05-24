import React, { useState } from "react";
import Landing from "../../components/Landing";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";

const Main = () => {
  const isLanding = false;
  return (
    <>
      {isLanding ? (
        <Landing />
      ) : (
        <>
          <About />
          <Projects />
          <Contact />
        </>
      )}
    </>
  );
};

export default Main;
