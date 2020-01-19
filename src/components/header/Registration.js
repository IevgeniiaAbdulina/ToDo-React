import React from "react";
import { Button } from "reactstrap";

import "./Registration.css";

class Registration extends React.Component {
  state = {
    login: "",
    email: "",
    password: ""
  };

  render() {
    return (
      <Button color="#" style={buttonStyle}>
        Register
      </Button>
    );
  }
}

const buttonStyle = {
  color: "#fff"
};

export default Registration;
