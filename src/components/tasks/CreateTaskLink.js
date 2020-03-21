import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const CreateTaskLink = () => {
  return (
    <div>
      {/* <div>Create new TASK here > </div>
      <Link to="/create/task">Create task</Link> */}
      <Button className="add-task-button">
        <div className="add-task-button-text">
          <i className="material-icons">add</i>
          <Link to="/create/task"> Add a new task</Link>
        </div>
      </Button>
    </div>
  );
};

export default CreateTaskLink;
