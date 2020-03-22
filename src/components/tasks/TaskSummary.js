import React from "react";

const TaskSummary = () => {
  return (
    <div className="task-card">
      <div className="task-content">
        <i className="material-icons">radio_button_unchecked</i>
        <div className="task-title">Task title</div>
      </div>
      <i className="material-icons">edit</i>
    </div>
  );
};

export default TaskSummary;
