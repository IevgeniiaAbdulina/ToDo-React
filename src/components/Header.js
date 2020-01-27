import React from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import Register from "./Register";
import Login from "./Login";

class Header extends React.Component {
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

  isLogged() {
    const token = localStorage.getItem("token");
    const login = localStorage.getItem("login");

    if (!token) {
      return (
        <Collapse navbar isOpen={this.state.isOpen}>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Login />
            </NavItem>

            <NavItem>
              <Register />
            </NavItem>
          </Nav>
        </Collapse>
      );
    } else if (token) {
      return (
        <Collapse navbar isOpen={this.state.isOpen}>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={buttonStyle}>
                Welcome! {login}
              </DropdownToggle>

              <DropdownMenu right>
                <DropdownItem>Logged in as {login}</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={() => this.onLogoutClick()}>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      );
    }
  }

  onLogoutClick = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("token");
    // this.props.history.push("/");
    this.setState({});
  };

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
  color: "#fff",
  background: "#11064d"
};

const buttonStyle = {
  color: "#fff"
};

export default Header;
