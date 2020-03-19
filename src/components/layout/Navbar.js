import React from "react";
import { Link } from "react-router-dom";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <div>
      <Link to="/">LOGO</Link>
      <SignedInLinks />
      <SignedOutLinks />
    </div>
  );
};

export default Navbar;
