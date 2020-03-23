import React from "react";

import TaskSummary from "./TaskSummary";

const TasksCatalog = () => {
  return (
    <div>
      {/* tasks.map() */}
      <TaskSummary />
      <TaskSummary />
      <TaskSummary />
    </div>
  );
};

export default TasksCatalog;
