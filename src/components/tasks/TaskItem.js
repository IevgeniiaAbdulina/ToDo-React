import React from "react";

import "./TaskItem.css";

class TaskItem extends React.Component {
  state = {
    listID: "",
    name: "",
    checked: false
  };

  render() {
    return (
      <div>
        <div>Task</div>
      </div>
    );
  }
}

export default TaskItem;
