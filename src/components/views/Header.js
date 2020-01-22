import React from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

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

  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <NavbarBrand>ToDo List</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  onClick={this.props.onLoginClick}
                  className="btn"
                  style={buttonStyle}
                >
                  Log In
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  onClick={this.props.onRegisterClick}
                  className="btn"
                  style={buttonStyle}
                >
                  Register
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const buttonStyle = {
  color: "#fff"
};

export default Header;
