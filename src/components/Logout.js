import React from "react";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
// import { Redirect } from "react-router-dom";

const Logout = () => {
  const login = localStorage.getItem("login");

  const onLogoutClick = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("token");
  };

  return (
    <div>
      {/* {login ? (
        <Redirect to="/" />
      ) : ( */}
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
      {/* )} */}
    </div>
  );
};

const buttonStyle = {
  color: "#fff"
};

export default Logout;
