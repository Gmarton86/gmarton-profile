import React from "react";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <header id="header" className="mt-14 text-xl">
      <div className="flex justify-between">
        <header className="flex items-center">
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
