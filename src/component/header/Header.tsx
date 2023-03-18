import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header id="header" className="pt-14 text-xl">
      <div className="flex justify-between">
        <header
          className="flex items-center cursor-pointer"
          onClick={() => {
            navigate("/projects");
          }}
        >
          <h1>Erik Zurvalec</h1>
        </header>
        <div>
          <HeaderMenu />
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Header;
