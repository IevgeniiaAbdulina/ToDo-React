import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Card, FormGroup, Input, Col, Button } from "reactstrap";

import { createList } from "../../actions/listActions";

class CreateList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listName: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  callbackForCreatedList = () => {
    // console.log("on FOrm Submit after call");
    this.setState({
      listName: ""
    });
  };

  onFormSubmit = e => {
    // console.log("LIST FORM SUBMIT");
    e.preventDefault();

    this.props.createList(this.state.listName, this.callbackForCreatedList);
    // console.log("on FOrm Submit after call");
    // this.setState({
    //   listName: ""
    // });
  };

  render() {
    return (
      <div>
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
              >
                Cancel
              </Button>
              <Button size="sm" color="primary" onClick={this.onFormSubmit}>
                Save
              </Button>
            </div>
          </Card>
        </Col>
      </div>
    );
  }
}

CreateList.propTypes = {
  createList: PropTypes.func.isRequired
};

export default connect(null, { createList })(CreateList);
