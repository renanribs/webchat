import React from "react";
import { auth } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  MdForum,
  MdOutlineHouse,
  MdInsertChart,
  MdOutlineSettings,
  MdAttachMoney,
  MdOutlineConstruction,
  MdHelpOutline,
} from "react-icons/md";
import "./styles.css";
export const SidebarIcons = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <div class="sidebar">
        <a href="#home">
          <img class="img" src={user?.photoURL} alt="img" />
        </a>
        <a href="#home">
          <MdOutlineHouse />
        </a>
        <a href="#services">
          <MdForum />
        </a>
        <a href="#clients">
          <MdInsertChart />
        </a>
        <a href="#settings">
          <MdOutlineSettings />
        </a>
        <a href="#money">
          <MdAttachMoney />
        </a>
        <a href="#construct">
          <MdOutlineConstruction />
        </a>
        <a href="#help">
          <MdHelpOutline />
        </a>
      </div>
    </>
  );
};

export default SidebarIcons;
