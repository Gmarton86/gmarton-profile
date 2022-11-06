import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./content/LandingPage/LandingPage";
import Splash from "./content/Splash/Splash";
import Home from "./content/Home/Home";
import ProjectView from "./content/ProjectView/ProjectView";
import Header from "./component/header/Header";

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Routes>
        {/* header */}
        <Route path="/landing" element={<LandingPage />}></Route>
        <Route path="/projects" element={<Home />}></Route>
        <Route path="/projects/:projectId" element={<ProjectView />}></Route>
        <Route path="/" element={<Splash />}></Route>
      </Routes>
    </div>
  );
};

export default App;
