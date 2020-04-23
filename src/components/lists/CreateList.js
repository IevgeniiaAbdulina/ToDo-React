import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Card, FormGroup, Input, Col, Button } from "reactstrap";

import { createList } from "../../actions/listActions";
import ListSummary from "./ListSummary";

class CreateList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listName: "",
      showForm: true,
    };
  }

  closeForm = () => {
    this.setState({
      listName: "",
      showForm: !this.state.showForm,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.createList(this.state.listName);
    this.closeForm();
  };

  render() {
    const isOpen = this.state.showForm;
    const createListCard = isOpen ? (
      <Col>
        <Card className="create-list-card">
          <FormGroup className="create-list-form">
            <Input
              required
              type="text"
              name="listName"
              placeholder="List title ..."
              onChange={this.handleChange}
            />
          </FormGroup>
          <div className="button-container">
            <Button
              size="sm"
              outline
              color="secondary"
              className="ic-close-form"
              onClick={this.closeForm}
            >
              Cancel
            </Button>
            <Button size="sm" color="primary" onClick={this.onFormSubmit}>
              Save
            </Button>
          </div>
        </Card>
      </Col>
    ) : null;

    return <>{createListCard}</>;
  }
}

CreateList.propTypes = {
  createList: PropTypes.func.isRequired,
};

export default connect(null, { createList })(CreateList);
