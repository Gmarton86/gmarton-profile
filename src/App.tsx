import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./content/LandingPage/LandingPage";
import Splash from "./content/Splash/Splash";

const App = () => {
  return (
    <Routes>
      {/* header */}
      <Route path="/home" element={<LandingPage />}></Route>
      <Route path="/" element={<Splash />}></Route>
    </Routes>
  );
}



export default App;
