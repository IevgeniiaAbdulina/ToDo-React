import React, { Component } from "react";
import { Card, FormGroup, Input, Col, Button } from "reactstrap";

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

  onFormSubmit = e => {
    console.log("LIST FORM SUBMIT");
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Col md={4}>
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
              {/* <Button close className="ic-close-form" /> */}
            </div>
          </Card>
        </Col>
      </div>
    );
  }
}

export default CreateList;
