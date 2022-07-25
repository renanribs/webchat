import React from "react";
import "./styles.css";
import Logo from "./favicon.png";
import { auth } from "../../services/firebase";
import {
  MdBrightness5,
  MdOutlineVolumeUp,
  MdOutlineVpnLock,
  MdConnectWithoutContact,
  MdOutlineToggleOff,
  MdBrightness2,
  MdPowerSettingsNew,
} from "react-icons/md";

import { ImWhatsapp } from "react-icons/im";

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
            <ImWhatsapp id="whatsapp" class="toggler toggler3" />
            <div id="canal" class="toggler toggler3">
              <p>Canal Canal SDR 0001</p>
              <div>
                <p id="p-canal" style={{ paddingTop: "1px", color: "#1e9188" }}>
                  <span style={{ color: "#fdcf58", fontSize: "18px" }}>90</span>
                  <span style={{ fontSize: "15px" }}>\1000</span> Contatos-dia
                </p>
              </div>
            </div>
          </a>

          <a href="#button">
            <button class="btn btn-success toggler toggler3" type="submit">
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
          <a href="#noturno" class="icons toggler">
            <MdBrightness2 />
          </a>
          <a href="#on-off" class="icons toggler">
            <MdOutlineToggleOff />
          </a>
          <a href="#claro" class="icons toggler">
            <MdBrightness5 />
          </a>
          <a class="icons toggler">
            <MdPowerSettingsNew
              onClick={() => [auth.signOut(), setUserChat(null)]}
            />
          </a>
        </div>
      </div>
      <hr></hr>
    </>
  );
};
export default NavbarHeader;
