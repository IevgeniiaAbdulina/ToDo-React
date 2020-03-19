import React, { Component } from "react";

class CreateList extends Component {
  render() {
    return (
      <div>
        <h5>Create new list MODAL</h5>
        <form>
          <label>List Name</label>
          <input type="text"></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateList;
