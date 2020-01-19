import React from "react";
import List from "./List";

import "./ListsTable.css";

class ListsTable extends React.Component {
  state = {
    lists: []
  };

  render() {
    return (
      <div>
        <h4>ListsTable</h4>
        <div>
          <List />
        </div>
      </div>
    );
  }
}

export default ListsTable;
