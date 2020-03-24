import React from "react";

const TaskSummary = ({ task }) => {
  return (
    <div className="task-card">
      <div className="task-content">
        <i className="material-icons">radio_button_unchecked</i>
        <div className="task-title">{task.name}</div>
      </div>
      <i className="material-icons">edit</i>
    </div>
  );
};

export default TaskSummary;
