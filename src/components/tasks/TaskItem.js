import React from "react";

const ListItem = () => {
  // if task DONE = return  "check_circle", else = return "radio_button_unchecked"
  return (
    <div style={taskStyle}>
      <div style={taskContentStyle}>
        {/* <i class="material-icons" style={icTaskDone}>
          check_circle
        </i> */}

        <i class="material-icons">radio_button_unchecked</i>
        <div style={taskTextStyle}>Task 1</div>
      </div>
      <i class="material-icons">edit</i>
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

  width: "316px",
  height: "48px",
  left: "5px",
  margin: "10px 0",
  padding: "0px 20px",

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
