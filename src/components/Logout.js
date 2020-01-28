import React from "react";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const Logout = () => {
  const login = localStorage.getItem("login");

  const onLogoutClick = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("token");
  };

  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret style={buttonStyle}>
        Welcome! {login}
      </DropdownToggle>

      <DropdownMenu right>
        <DropdownItem>Logged in as {login}</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={() => onLogoutClick()}>Log Out</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

const buttonStyle = {
  color: "#fff"
};

export default Logout;
