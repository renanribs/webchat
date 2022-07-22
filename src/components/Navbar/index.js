import React from "react";
import "./styles.css";
import Logo from "./favicon.png";
import {
  MdBrightness5,
  MdOutlineVolumeUp,
  MdOutlineVpnLock,
  MdConnectWithoutContact,
  MdOutlineToggleOff,
  MdBrightness2,
} from "react-icons/md";

const NavbarHeader = () => {
  return (
    <>
      <div class="topnav">
        <a href="#home">
          <img class="logo" src={Logo} alt="Logo" />
        </a>

        <a href="#news">POLICHAT</a>
        <div class="header-right">
          <a href="#button">
            {" "}
            <button class="btn btn-success" type="submit">
              Indique e ganhe
            </button>
          </a>
          <a href="#world">
            <MdConnectWithoutContact />
          </a>
          <a href="#world">
            <MdOutlineVpnLock />
          </a>
          <a href="#sound">
            <MdOutlineVolumeUp />
          </a>
          <a href="#noturno" class="icons">
            <MdBrightness2 />
          </a>
          <a href="#on-off" class="icons">
            <MdOutlineToggleOff />
          </a>
          <a href="#claro" class="icons">
            <MdBrightness5 />
          </a>
        </div>
      </div>
      <hr></hr>
    </>
  );
};
export default NavbarHeader;
