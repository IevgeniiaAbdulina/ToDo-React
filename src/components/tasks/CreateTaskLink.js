import React from "react";
// import { NavLink } from "reactstrap";

const CreateTaskLink = () => {
  return (
    <div>
      <div className="add-task-button">
        <i className="material-icons ic-add-task">add</i>
        <div className="add-task-button-text"> Add a new task</div>
      </div>
    </div>
  );
};

export default CreateTaskLink;
