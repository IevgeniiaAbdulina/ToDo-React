import React from "react";
import { Link } from "react-router-dom";

const CreateTaskLink = () => {
  return (
    <div>
      <div>Create new TASK here > </div>
      <Link to="/create/task">Create task</Link>
    </div>
  );
};

export default CreateTaskLink;
