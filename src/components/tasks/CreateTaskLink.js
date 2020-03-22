import React from "react";
import { NavLink } from "reactstrap";

const CreateTaskLink = () => {
  return (
    <div>
      <div className="add-task-button">
        <i className="material-icons ic-add-task">add</i>
        <NavLink href="/create/task" className="add-task-button-text">
          {" "}
          Add a new task
        </NavLink>
      </div>
    </div>
  );
};

export default CreateTaskLink;
