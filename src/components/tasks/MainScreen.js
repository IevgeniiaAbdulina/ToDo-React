import React from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from "reactstrap";

import "../header/Header.css";
import { Redirect } from "react-router-dom";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      token: localStorage.getItem("token")
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    if (this.state.token === null) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Navbar dark expand="md" style={navbarStyle}>
          <NavbarBrand>ToDo List</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav>
              <NavItem>Welcome, user!</NavItem>
              <NavItem>
                <Button to="/logout">Log out</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <h1>Welcome! You are Sign In! User Page</h1>
      </div>
    );
  }
}

const navbarStyle = {
  color: "#fff",
  background: "#11064d"
};

export default MainScreen;
