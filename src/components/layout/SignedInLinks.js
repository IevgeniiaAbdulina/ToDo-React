import React from "react";
import { NavLink } from "reactstrap";

const SignedInLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Welcome...</NavLink>
        <NavLink to="/">Log Out</NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
