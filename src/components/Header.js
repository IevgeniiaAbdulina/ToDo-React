import React from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";
import background from "./background.svg";
// import { Redirect } from "react-router-dom";

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
            <Logout />
          </Nav>
        </Collapse>
      );
    }

    // if (!token) {
    //   return (
    //     <Redirect
    //       to="/"
    //       render={() => (
    //         <Collapse navbar isOpen={this.state.isOpen}>
    //           <Nav className="ml-auto" navbar>
    //             <NavItem>
    //               <Login />
    //             </NavItem>

    //             <NavItem>
    //               <Register />
    //             </NavItem>
    //           </Nav>
    //         </Collapse>
    //       )}
    //     />
    //   );
    // } else if (token) {
    //   return (
    //     <Redirect
    //       to="/user"
    //       render={() => (
    //         <Collapse navbar isOpen={this.state.isOpen}>
    //           <Nav className="ml-auto" navbar>
    //             <Logout />
    //           </Nav>
    //         </Collapse>
    //       )}
    //     />
    //   );
    // }
  }

  render() {
    return (
      <div>
        <Navbar dark expand="md" style={navbarStyle}>
          <NavbarBrand>ToDo List</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          {this.isLogged()}
        </Navbar>
        <div style={backgroundStyle}></div>
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

const backgroundStyle = {
  zIndex: "-1",
  content: "",
  position: "absolute",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  top: "0",
  width: "100%",
  backgroundImage: `url(${background})`,
  height: "520px"
};

export default Header;
