import React from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

// import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      isLoggedIn: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onLoggedInEvent = () => {
    console.log("setState: true = Header");
    this.setState({
      isLoggedIn: true
    });
  };

  isLogged() {
    const token = localStorage.getItem("token");

    if (!token) {
      return (
        <Collapse navbar isOpen={this.state.isOpen}>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Login
                userIsLogged={this.props.handleUser}
                onLoggedInEventChild={this.onLoggedInEvent}
                // onLoginButtonCLicked={this.props.funcFromApp}
              />
            </NavItem>

            {/* <NavItem>
              <Register />
            </NavItem> */}
          </Nav>
        </Collapse>
      );
    } else if (token) {
      return (
        <Collapse navbar isOpen={this.state.isOpen}>
          <Nav className="ml-auto" navbar>
            <Logout />
          </Nav>
        </Collapse>
      );
    }
  }

  render() {
    return (
      <div>
        <Navbar dark expand="md" style={navbarStyle}>
          <NavbarBrand>ToDo List</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          {this.isLogged()}
        </Navbar>
      </div>
    );
  }
}

const navbarStyle = {
  marginTop: "3.75em",
  color: "#fff",
  background: "#11064d",
  fontWeight: 500
};

export default Header;
