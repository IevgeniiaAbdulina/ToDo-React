// rcf + Tab - template of a function component
// rce + Tab - to wright a template of a classNameName component
import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Registration from "./Registration";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-default navbar-expand-lg navbar-dark flex-row flex-md-row bd-navbar"
      role="navigation"
    >
      <div className="navbar-brand mb-0 h1">ToDo List</div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
          <form className="form-inline">
            <button
              type="button"
              className="btn btn-outline-light my-2 my-sm-0"
              data-toggle="modal"
              data-target="#loginModal"
            >
              <Login />
            </button>
            <button
              type="button"
              className="btn btn-outline-light my-2 my-sm-0"
              data-toggle="modal"
              data-target="#registerModal"
            >
              <Registration />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
