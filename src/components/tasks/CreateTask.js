import React, { Component } from "react";

class CreateTask extends Component {
  render() {
    return (
      <div>
        <h5>Create new TASK MODAL</h5>
        <form>
          <label>Task Name</label>
          <input type="text"></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateTask;
