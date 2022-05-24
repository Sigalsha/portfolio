import git from "../assets/techSkills/git.svg";
import angular from "../assets/techSkills/angular.svg";
import css from "../assets/techSkills/css.svg";
import cypress from "../assets/techSkills/cypress-io.png";
import html from "../assets/techSkills/html.svg";
import javascript from "../assets/techSkills/javascript.svg";
import jenkins from "../assets/techSkills/jenkins.png";
import jira from "../assets/techSkills/jira.png";
import jquery from "../assets/techSkills/jquery.svg";
import mongodb from "../assets/techSkills/mongodb.png";
import nodejs from "../assets/techSkills/nodejs.png";
import react from "../assets/techSkills/react-js.svg";
import redux from "../assets/techSkills/redux.svg";
import sass from "../assets/techSkills/sass.svg";
import typescript from "../assets/techSkills/typescript.svg";
import styled from "../assets/techSkills/styled_components.png";

export const techSkills = {
  frontend: [
    { id: 1, name: "HTML", img: html },
    { id: 2, name: "CSS", img: css },
    { id: 3, name: "Javascript", img: javascript },
    { id: 4, name: "Typescript", img: typescript },
    { id: 5, name: "ReactJS", img: react },
    { id: 6, name: "Redux", img: redux },
    { id: 7, name: "Angular", img: angular },
    { id: 8, name: "JQuery", img: jquery },
    { id: 9, name: "Sass", img: sass },
    { id: 10, name: "Styled Components", img: styled },
    { id: 11, name: "Cypress.io", img: cypress }
  ],
  backend: [
    { id: 1, name: "MongoDB", img: mongodb },
    { id: 2, name: "Node.Js", img: nodejs }
  ],
  tools: [
    { id: 1, name: "Git", img: git },
    { id: 2, name: "Jenkins", img: jenkins },
    { id: 3, name: "Jira", img: jira }
  ]
};
