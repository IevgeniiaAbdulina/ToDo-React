import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../actions/authActions";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
} from "reactstrap";

const SignedInLinks = (props) => {
  const login = localStorage.getItem("login");

  return (
    <Nav className="ml-auto" navbar>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          <span className="nav-links"> Welcome, {login} </span>
        </DropdownToggle>

        <DropdownMenu right>
          <DropdownItem header>You are logged in</DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={props.signOut}>Log Out</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
