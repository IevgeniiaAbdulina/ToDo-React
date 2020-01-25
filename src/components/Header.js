import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

import Register from './Register';
import Login from './Login';


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
                <p>Header</p>
                <div>
                  <Navbar dark expand="md" style={navbarStyle}>
                    <NavbarBrand>ToDo List</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
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
                  </Navbar>
                </div>
            </div>
         );
    }
}

const navbarStyle = {
  color: "#fff",
  background: "#11064d"
};
 
export default Header;