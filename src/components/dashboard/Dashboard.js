import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import ListsCatalog from "../lists/ListsCatalog";
import { setSignedIn } from "../../actions/authActions";
import { getLists } from "../../actions/listActions";
import { getTasks } from "../../actions/taskActions";
import CreateList from "../lists/CreateList";
import { CardColumns } from "reactstrap";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listFormIsOpen: false,
    };
  }

  UNSAFE_componentWillMount() {
    this.props.setSignedIn();
    this.props.getLists();
    this.props.getTasks();
  }

  listFormShow = () => {
    this.setState({
      listFormIsOpen: !this.state.listFormIsOpen,
    });
  };

  render() {
    const { lists, tasks, auth } = this.props;
    if (!auth) return <Redirect to="/" />;

    const formIsOpen = this.state.listFormIsOpen;
    const createListForm =
      formIsOpen && lists.length < 3 ? <CreateList /> : null;

    return (
      <div>
        <DashboardHeader newListForm={this.listFormShow} />
        <CardColumns>
          {createListForm}
          <ListsCatalog lists={lists} tasks={tasks} />
        </CardColumns>
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
  auth: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    lists: state.listsState.lists,
    tasks: state.tasksState.tasks,
    auth: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { setSignedIn, getLists, getTasks })(
  Dashboard
);
