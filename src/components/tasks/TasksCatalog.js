import React from "react";

import TaskSummary from "./TaskSummary";

const TasksCatalog = ({ tasks }) => {
  return (
    <div>
      {tasks &&
        tasks.map(task => {
          return <TaskSummary task={task} key={task._id} />;
        })}
    </div>
  );
};

export default TasksCatalog;
