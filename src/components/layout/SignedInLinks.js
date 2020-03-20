import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul>
      <h5>Welcome...</h5>
      <li>
        <NavLink to="/">LogOut</NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
