import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import DashboardHeader from "./DashboardHeader";
import ListsCatalog from "../lists/ListsCatalog";
import { getLists } from "../../actions/listActions";

class Dashboard extends Component {
  componentWillMount() {
    this.props.getLists();
  }

  render() {
    console.log("THIS PROPS in DASHBOARD:", this.props);

    const { lists } = this.props;
    return (
      <div>
        <DashboardHeader />
        <ListsCatalog lists={lists} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  getLists: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    lists: state.listsState.lists
  };
};

export default connect(mapStateToProps, { getLists })(Dashboard);
