import React from "react";

const Footer = () => {
  console.log("hah", window.scrollbars.visible);
  return (
    <footer className="text-center m-5 sticky top-[100vh]">
      <span
        className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 "
        style={{ fontFamily: "roboto" }}
      >
        © 2022 &nbsp;
        <a href="https://zurvi.com" className="hover:underline">
          Zurvi
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
