// @flow strict
import { Routes, Route } from "react-router-dom";
import * as React from "react";
import Overview from "../../Pages/Overview";
import Employees from "../../Pages/Employees";
import Projects from "../../Pages/Projects";
import Teams from "../../Pages/Teams";
import NotFound from "../../Pages/NotFound";
import ProjectPortal from "../../Pages/ProjectPortal";

function MainRouter() {
  return (
    <div>
      <Routes>
        <Route path="/Overview" element={<Overview />} />
        <Route path="/" element={<ProjectPortal />} />
        <Route path="/Employees" element={<Employees />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default MainRouter;
