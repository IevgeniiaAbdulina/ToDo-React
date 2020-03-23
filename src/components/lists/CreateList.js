import React, { Component } from "react";
import { Card, FormGroup, Input, Col, Button } from "reactstrap";

// import { createList } from "../../actions/listActions";
// import { connect } from "react-redux";

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

    this.props.createList(this.state.listName);
    this.setState({
      listName: ""
    });
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

// CreateList.propTypes = {
//   createList: PropTypes.func.isRequired
// };

export default // connect(null, { createList })(
CreateList;
// );
