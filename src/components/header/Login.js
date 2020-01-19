import React from "react";
import { Button } from "reactstrap";

import "./Login.css";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <Button color="#" style={buttonStyle}>
        Log In
      </Button>
    );
  }
}

const buttonStyle = {
  color: "#fff"
};

export default Login;
