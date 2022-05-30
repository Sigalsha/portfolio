import React, { useState } from "react";
import { TECH_SKILLS } from "../../constants/techSkills";
import Title from "../shared/Title";
import "./TechSkills.css";

const TechSkills = () => {
  const { frontend, backend, tools } = TECH_SKILLS;
  return (
    <div className="tech-container">
      <Title title="Tech Skills" />
      <ul className="tech-skills-wrapper">
        {TECH_SKILLS.map((skill) => {
          return (
            <li className="skill-card" key={skill.id}>
              <img src={skill.img} alt={`${skill.name}-logo`} />
              <p>{skill.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TechSkills;
