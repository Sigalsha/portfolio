import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <Outlet />
    </div>
  );
};

export default Main;
