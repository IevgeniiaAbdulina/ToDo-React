import React from "react";
import { NavLink, NavItem, Nav } from "reactstrap";

const SignedOutLinks = () => {
  return (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href="/signup" style={{ color: "#fff" }}>
          Sign Up
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink href="/signin" style={{ color: "#fff" }}>
          Sign In
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default SignedOutLinks;
