import React from "react";
import { Button } from "reactstrap";

const Home = props => {
  return (
    <div style={pageStyle}>
      <h3>Capture your ideas and inspirations in notes.</h3>
      <h5>Light, clean and free application.</h5>
      <Button style={btnStyle} onClick={props.toggleModalRegister}>
        Try it now
      </Button>
    </div>
  );
};

const pageStyle = {
  top: "3.75em",
  color: "#fff",
  position: "relative",
  textAlign: "center"
};

const btnStyle = {
  marginTop: "3.75em",
  backgroundColor: "#06D8D8",
  fontWeight: 700
};

export default Home;
