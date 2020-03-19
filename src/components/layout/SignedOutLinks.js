import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">SignUp</NavLink>
        <NavLink to="/">SignIn</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
