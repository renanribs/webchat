import React from "react";
import "./styles.css";
import Logo from "./favicon.png";
const NavbarHeader = () => {
  return (
    <>
      <div class="topnav">
        <a href="#home">
          <img class="logo" src={Logo} alt="Logo" />
        </a>

        <a href="#news">POLICHAT</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </>
  );
};
export default NavbarHeader;
