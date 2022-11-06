import React from "react";
import { Outlet } from "react-router-dom";
import Projects from "../../component/projects/Projects";

const Home = () => {
  return (
    <div>
      <Outlet/>
      <Projects></Projects>
    </div>
  );
};

export default Home;
