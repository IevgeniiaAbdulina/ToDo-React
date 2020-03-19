import React, { Component } from "react";

import DashboardHeader from "./DashboardHeader";
import ListsCatalog from "../lists/ListsCatalog";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <DashboardHeader />
        <ListsCatalog />
      </div>
    );
  }
}

export default Dashboard;
