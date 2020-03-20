import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Navbar, NavbarToggler, Collapse, NavbarBrand } from "reactstrap";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const NavbarApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md" className="navbar">
        {/* <Link to="/">ToDo</Link> */}
        <NavbarBrand href="/">ToDo</NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse navbar isOpen={isOpen}>
          <SignedInLinks />
          <SignedOutLinks />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarApp;
