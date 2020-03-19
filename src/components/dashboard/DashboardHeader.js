import React from "react";
import { NavLink } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <div>
      <div>Create new list here > </div>
      <NavLink to="/create/list">Create List</NavLink>
    </div>
  );
};

export default DashboardHeader;
