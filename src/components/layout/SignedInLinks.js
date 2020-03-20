import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav
} from "reactstrap";

const SignedInLinks = () => {
  return (
    <Nav className="ml-auto" navbar>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          <span className="nav-links"> Welcome, Jane </span>
        </DropdownToggle>

        <DropdownMenu right>
          <DropdownItem header>You are logged in</DropdownItem>
          <DropdownItem divider />
          <DropdownItem href="/">Log Out</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  );
};

export default SignedInLinks;
