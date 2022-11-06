import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./content/LandingPage/LandingPage";
import Splash from "./content/Splash/Splash";
import Home from "./content/Home/Home";
import ProjectView from "./content/ProjectView/ProjectView";

const App = () => {
  return (
    <Routes>
      {/* header */}
      <Route path="/landing" element={<LandingPage />}></Route>
      <Route path="/projects" element={<Home />}></Route>
      <Route path="/projects/:projectId" element={<ProjectView />}></Route>
      <Route path="/" element={<Splash />}></Route>
    </Routes>
  );
}



export default App;
