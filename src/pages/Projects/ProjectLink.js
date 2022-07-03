import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../components/shared/LinkRoute/LinkRoute.css";

const ProjectLink = ({ href, icon, name }) => {
  return (
    <a className="link" href={href} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon className="link-icon" icon={icon} />
      <span className="link-title">{name}</span>
    </a>
  );
};

export default ProjectLink;
