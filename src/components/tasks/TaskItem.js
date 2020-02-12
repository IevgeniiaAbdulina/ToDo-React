import React from "react";

const ListItem = () => {
  // if task DONE = return  "check_circle", else = return "radio_button_unchecked"
  return (
    <div style={taskStyle}>
      <div style={taskContentStyle}>
        {/* <i class="material-icons" style={icTaskDone}>
          check_circle
        </i> */}

        <i className="material-icons">radio_button_unchecked</i>
        <div style={taskTextStyle}>Task name 1</div>
      </div>
      <i className="material-icons">edit</i>
    </div>
  );
};

// const icTaskDone = {
//   color: "#0CDBDB"
// };

const taskTextStyle = {
  marginLeft: "10px"
};

const taskContentStyle = {
  display: "flex",
  alignItems: "center"
};

const taskStyle = {
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  width: "100%",
  height: "auto",
  padding: "5px 20px",
  margin: "10px 0",

  background: "#FFFFFF",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.15), inset 6px 0px 0px #FBCED9",
  borderRadius: "4px",

  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "1em",
  lineHeight: "20px",
  letterSpacing: "0.25px",

  color: "rgba(0, 0, 0, 0.6)"
};

export default ListItem;
