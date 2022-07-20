import React from "react";
import {
  MdForum,
  MdOutlineHouse,
  MdInsertChart,
  MdBrightness7,
} from "react-icons/md";
import "./styles.css";
export const SidebarIcons = () => {
  return (
    <>
      <div class="sidebar">
        <a href="#home">
          <MdOutlineHouse />{" "}
        </a>
        <a href="#services">
          <MdForum />{" "}
        </a>
        <a href="#clients">
          <MdInsertChart />
        </a>
        <a href="#contact">
          <MdBrightness7 />
        </a>
      </div>
    </>
  );
};

export default SidebarIcons;
