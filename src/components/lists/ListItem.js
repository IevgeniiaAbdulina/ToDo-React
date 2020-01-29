import React from "react";
import { Badge } from "reactstrap";

const ListItem = () => {
  return (
    <div>
      <div id="card" style={cardStyle}>
        <div style={titleStyle}>
          <h6>List title</h6>
          <Badge pill>3</Badge>
          <i>...</i>
        </div>
        <button style={addTaskStyle}>
          <i>+</i>
          Add a new task
        </button>
      </div>
    </div>
  );
};

const cardStyle = {
  position: "relative",
  display: "flex",
  width: "413px",
  height: "138px",
  top: "3.75em",
  background: "#FFFFFF",
  boxShadow:
    "0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14)",
  borderRadius: "4px"
};

const titleStyle = {
  position: "absolute",
  width: "413px",
  height: "60px",

  background: "#F9F9F9",
  boxShadow: " 0px 1px 0px rgba(0, 0, 0, 0.15)",
  borderRadius: "4px 4px 0px 0px",

  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "1.25",
  lineHeight: "1.5",
  display: "flex",
  alignItems: "center",
  color: "rgba(0, 0, 0, 0.87)"
};

const addTaskStyle = {
  position: "relative",
  width: "403px",
  height: "48px",
  left: "5px",
  top: "70px",
  background: "#FFFFFF",
  border: "1px solid rgba(0, 0, 0, 0.08)",
  boxShadow: " 0px 1px 3px rgba(0, 0, 0, 0.15)",
  borderRadius: "4px",

  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0.25px",
  color: "rgba(0, 0, 0, 0.6)"
};

export default ListItem;
