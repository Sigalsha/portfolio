import React, { useState } from "react";
import { techSkills } from "../../constants/techSkills";
import "./TechSkills.css";

const TechSkills = () => {
  const { frontend, backend, tools } = techSkills;
  return (
    <div className="tech-container">
      <header className="tech-header">
        <h1>tech skills</h1>
      </header>
      <div className="tech-skills-wrapper">
        Frontend:
        {frontend.map((skill) => {
          return (
            <div className="skill-card" key={skill.id}>
              <img src={skill.img} alt={`${skill.name}-logo`} />
              {skill.name}
            </div>
          );
        })}
      </div>
      <div className="tech-skills-wrapper">
        Backend:
        {backend.map((skill) => {
          return (
            <div className="skill-card" key={skill.id}>
              <img src={skill.img} alt={`${skill.name}-logo`} />
              {skill.name}
            </div>
          );
        })}
      </div>
      <div className="tech-skills-wrapper">
        Tools:
        {tools.map((skill) => {
          return (
            <div className="skill-card" key={skill.id}>
              <img src={skill.img} alt={`${skill.name}-logo`} />
              {skill.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechSkills;
