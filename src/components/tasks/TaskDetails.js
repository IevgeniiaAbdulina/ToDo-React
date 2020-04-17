import React from "react";
import { Redirect } from "react-router-dom";

const TaskDetails = () => {
  const token = localStorage.getItem("token");
  if (!token) return <Redirect to="/signin" />;
  return (
    <div>
      <div>Task details here</div>
    </div>
  );
};

export default TaskDetails;
