import React from "react";
import { NavLink } from "reactstrap";

const SignedInLinks = () => {
  return (
    <ul>
      <li>
        <h5>Welcome...</h5>
        <NavLink to="/">LogOut</NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
