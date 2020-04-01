import React, { useState } from "react";
import { Navbar, NavbarToggler, NavbarBrand, Collapse } from "reactstrap";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const NavbarApp = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { auth } = props;
  // const token = localStorage.getItem("token");
  const links = auth ? <SignedInLinks /> : <SignedOutLinks />;

  return (
    <div>
      <Navbar dark expand="md" className="navbar-app">
        <NavbarBrand href="/">ToDo</NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>
          {links}
        </Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps)(NavbarApp);
