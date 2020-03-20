import React from "react";
// import { NavLink } from "react-router-dom";
import { NavLink, NavItem, Nav } from "reactstrap";

const SignedOutLinks = () => {
  return (
    <Nav>
      <NavItem>
        {/* <NavLink to="/signup">SignUp</NavLink>
      <NavLink to="/signin">SignIn</NavLink> */}
        <NavLink href="/signup" className="nav-link">
          SignUp
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/signin" className="nav-link">
          SignIn
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default SignedOutLinks;
