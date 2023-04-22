import React from "react";
import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./content/LandingPage/LandingPage";
import Splash from "./content/Splash/Splash";
import Home from "./content/Home/Home";
import ProjectView from "./content/ProjectView/ProjectView";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import About from "./content/About/About";
import Contact from "./content/Contact/Contact";

const App = () => {
  const location = useLocation();
  const isSplashScreen = location.pathname === "/";

  return (
    <div className="min-h-screen">
      <div className="container mx-auto ">
        <Routes>
          <Route path="/landing" element={<LandingPage />}></Route>
          <Route path="/projects" element={<Home />}>
            <Route path="/projects" element={<Header />}></Route>
          </Route>
          <Route path="/about" element={<About />}>
            <Route path="/about" element={<Header />}></Route>
          </Route>
          <Route path="/contact" element={<Contact />}>
            <Route path="/contact" element={<Header />}></Route>
          </Route>
          <Route path="/projects/:projectId" element={<ProjectView />}>
            <Route path="/projects/:projectId" element={<Header />}></Route>
          </Route>
          <Route path="/" element={<Splash />}></Route>
        </Routes>
      </div>
      {!isSplashScreen && <Footer />}
    </div>
  );
};

export default App;
