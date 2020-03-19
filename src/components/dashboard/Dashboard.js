import React, { Component } from "react";

import ListsCatalog from "../lists/ListsCatalog";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div>
          <ListsCatalog />
        </div>
      </div>
    );
  }
}

export default Dashboard;
