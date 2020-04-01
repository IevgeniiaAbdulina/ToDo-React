import React, { Component } from "react";
import { Card, FormGroup, Input, Button } from "reactstrap";

class CreateTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskName: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    // console.log("TASK FORM SUBMIT");
    e.preventDefault();
    // console.log(this.state);
  };
  render() {
    return (
      <>
        <Card className="create-task-card">
          <FormGroup className="create-list-form">
            <Input
              required
              type="text"
              name="taskName"
              placeholder="Task ..."
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
      </>
    );
  }
}

export default CreateTask;
