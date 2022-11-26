import React from "react";

const Footer = () => {
  console.log("hah", window.scrollbars.visible);
  return (
    <footer className="text-center m-5">
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
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