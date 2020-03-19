import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to="/signup">SignUp</NavLink>
        <NavLink to="/signin">SignIn</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
