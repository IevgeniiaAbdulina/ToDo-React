import React from "react";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
// import { Redirect } from "react-router-dom";

const Logout = () => {
  const onLogoutClick = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("token");
  };

  const login = localStorage.getItem("login");
  // const logout = localStorage.getItem("token");

  return (
    <div>
      {/* {!logout ? (
        <Redirect to="/" />
      ) : ( */}
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret style={buttonStyle}>
          Welcome! {login}
        </DropdownToggle>

        <DropdownMenu right>
          <DropdownItem>You are logged in {login}</DropdownItem>
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
