import React from "react";
// import { NavLink } from "react-router-dom";
import { NavItem, NavLink, Nav } from "reactstrap";

const SignedInLinks = () => {
  return (
    <Nav>
      <NavItem>
        Welcome...
        <NavLink href="/" className="nav-link">
          LogOut
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default SignedInLinks;
