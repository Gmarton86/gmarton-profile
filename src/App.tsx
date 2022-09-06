import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./content/LandingPage/LandingPage";

const App = () => {
  return (
    <Routes>
      {/* header */}
      <Route path="/" element={<LandingPage/>}>
      </Route>
    </Routes>
  );
}



export default App;
