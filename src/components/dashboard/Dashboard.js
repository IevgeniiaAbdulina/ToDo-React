import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import DashboardHeader from "./DashboardHeader";
import ListsCatalog from "../lists/ListsCatalog";
import { getLists } from "../../actions/listActions";
import { getTasks } from "../../actions/taskActions";

class Dashboard extends Component {
  componentWillMount() {
    this.props.getLists();
    this.props.getTasks();
  }

  render() {
    const { lists } = this.props;
    const { tasks } = this.props;
    return (
      <div>
        <DashboardHeader />
        <ListsCatalog lists={lists} tasks={tasks} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  getLists: PropTypes.func.isRequired,
  getTasks: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    lists: state.listsState.lists,
    tasks: state.tasksState.tasks
  };
};

export default connect(mapStateToProps, { getLists, getTasks })(Dashboard);
