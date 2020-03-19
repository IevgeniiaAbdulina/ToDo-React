import React from "react";

import TaskSummary from "./TaskSummary";

const TasksCatalog = () => {
  return (
    <div>
      <h5>Tasks catalog</h5>
      <TaskSummary />
      <TaskSummary />
      <TaskSummary />
    </div>
  );
};

export default TasksCatalog;
