import React from "react";
import Navbar from "../Components/Navbar";
import Search from "./Search";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
    </div>
  );
};

export default Sidebar;
