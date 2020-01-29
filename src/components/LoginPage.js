import React from "react";

const LoginPage = () => {
  return (
    <div style={pageStyle}>
      <h3>Welcome to ToDo List application</h3>
      <h5>For get starting you need to Login!</h5>
    </div>
  );
};

const pageStyle = {
  top: "3.75em",
  color: "#fff",
  position: "relative",
  textAlign: "center"
};

export default LoginPage;
