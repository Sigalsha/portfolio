import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import { PROJECTS } from "../../constants/projects";
import LinkRoute from "../shared/LinkRoute/LinkRoute";
import Button from "../shared/Button";
import Title from "../shared/Title";
import "./Projects.css";

const Projects = () => {
  const allProjects = [...PROJECTS["personal"], ...PROJECTS["volunteer"]];
  const [selectedProjects, setSelectedProjects] = useState(allProjects);
  const [activeProjectsBtn, setActiveProjectsBtn] = useState("All");

  const handleClick = (projectsType) => {
    switch (projectsType) {
      case "All":
        setSelectedProjects(allProjects);
        setActiveProjectsBtn("All");
        break;
      case "Personal":
        setSelectedProjects(PROJECTS["personal"]);
        setActiveProjectsBtn("Personal");
        break;
      case "Volunteer":
        setSelectedProjects(PROJECTS["volunteer"]);
        setActiveProjectsBtn("Volunteer");
        break;
      default:
        setSelectedProjects(allProjects);
        setActiveProjectsBtn("All");
    }
  };

  return (
    <div className="page-container">
      <Title title="Projects" />
      <section className="projects-btn-wrapper">
        <Button
          btnTxt="All"
          onClick={() => handleClick("All")}
          isActive={activeProjectsBtn === "All"}
        />
        <Button
          btnTxt="Personal"
          onClick={() => handleClick("Personal")}
          isActive={activeProjectsBtn === "Personal"}
        />
        <Button
          btnTxt="Volunteer"
          onClick={() => handleClick("Volunteer")}
          isActive={activeProjectsBtn === "Volunteer"}
        />
      </section>
      <ul className="projects-cards-container">
        {selectedProjects.map((pro) => {
          return (
            <li className="project-card" key={pro.id}>
              <div className="project-img-cover"></div>
              <div className="project-title">
                <h3>{pro.name}</h3>
              </div>
              <img
                className="project-img"
                src={pro.img}
                alt={`${pro.name}-logo`}
              />
              <div className="project-meta-data">
                {pro.livePath && (
                  <LinkRoute
                    to={pro.livePath}
                    name="Live"
                    icon={faArrowUpRightFromSquare}
                  />
                )}
                {pro.githubPath && (
                  <LinkRoute
                    to={pro.githubPath}
                    name="Github"
                    icon={faGithub}
                  />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
