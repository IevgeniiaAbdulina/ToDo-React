import React from "react";
import TaskItem from "../tasks/TaskItem";

import "./List.css";

class List extends React.Component {
  state = {
    name: "",
    tasks: []
  };

  componentDidMount() {
    // axios...
  }

  // markComplete = () => {}
  // addTask = () => {}
  // editTask = () => {}
  // deleteTask = () => {}

  // Show all tasks
  // Show all checked tasks
  // Show all unchecked tasks

  render() {
    return (
      <div>
        <div>List name</div>
        <div>
          <TaskItem />
        </div>
      </div>
    );
  }
}

export default List;
