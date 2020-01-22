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

import { Redirect } from "react-router-dom";

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token && token.length > 10;
  };

  render() {
    const isAlreadyAuthenticated = this.isAuthenticated();

    return (
      <div>
        {!isAlreadyAuthenticated ? (
          <Redirect to="/" />
        ) : (
          <Navbar dark expand="md" style={navbarStyle}>
            <NavbarBrand>ToDo List</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav>
                <NavItem>Welcome, user!</NavItem>
                <NavItem>
                  <Button to="/">Log out</Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        )}

        <h1>Welcome! You are Sign In! User Page</h1>
      </div>
    );
  }
}

const navbarStyle = {
  color: "#fff",
  background: "#11064d"
};

export default UserPage;
