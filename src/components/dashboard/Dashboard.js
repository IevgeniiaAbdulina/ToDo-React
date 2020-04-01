import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import DashboardHeader from "./DashboardHeader";
import ListsCatalog from "../lists/ListsCatalog";
import { setSignedIn } from "../../actions/authActions";
import { getLists } from "../../actions/listActions";
import { getTasks } from "../../actions/taskActions";

class Dashboard extends Component {
  componentWillMount() {
    this.props.setSignedIn();
    this.props.getLists();
    this.props.getTasks();
  }

  render() {
    const { lists, tasks, auth } = this.props;
    // const token = localStorage.getItem("token");
    if (!auth) return <Redirect to="/signin" />;

    return (
      <div>
        <DashboardHeader />
        <ListsCatalog lists={lists} tasks={tasks} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  setSignedIn: PropTypes.func.isRequired,
  getLists: PropTypes.func.isRequired,
  getTasks: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
  auth: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    lists: state.listsState.lists,
    tasks: state.tasksState.tasks,
    auth: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { setSignedIn, getLists, getTasks })(
  Dashboard
);
