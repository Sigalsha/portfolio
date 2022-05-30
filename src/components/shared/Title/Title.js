import React from "react";
import "./Title.css";

const Title = ({ title }) => {
  return (
    <header>
      <h1 className="title">{title}</h1>
    </header>
  );
};

export default Title;
