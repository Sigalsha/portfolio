import React, { useState } from "react";
import { PROJECTS } from "../../constants/projects";
import Button from "../shared/Button";
import Title from "../shared/Title";
import "./Projects.css";

const Projects = () => {
  const allProjects = [...PROJECTS["personal"], ...PROJECTS["volunteer"]];
  const [selectedProjects, setSelectedProjects] = useState(allProjects);

  const handleClick = (projectsType) => {
    switch (projectsType) {
      case "All":
        setSelectedProjects(allProjects);
        break;
      case "Personal":
        setSelectedProjects(PROJECTS["personal"]);
        break;
      case "Volunteer":
        setSelectedProjects(PROJECTS["volunteer"]);
        break;
      default:
        setSelectedProjects(allProjects);
    }
  };

  return (
    <div className="projects-container">
      <Title title="Projects" />
      <section className="projects-btn-wrapper">
        <Button btnTxt="All" onClick={() => handleClick("All")} />
        <Button btnTxt="Personal" onClick={() => handleClick("Personal")} />
        <Button btnTxt="Volunteer" onClick={() => handleClick("Volunteer")} />
      </section>
      <ul className="projects-cards-container">
        {selectedProjects.map((pro) => {
          return (
            <li className="project-card" key={pro.id}>
              <h3>{pro.name}</h3>
              {/*    <img
                className="project-img"
                src={pro.img}
                alt={`${pro.name}-logo`}
              /> */}
              <div className="project-meta-data">
                {pro.livePath && <a href={pro.livePath}>view live</a>}
                {pro.githubPath && <a href={pro.githubPath}>github</a>}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
