import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  FormFeedback,
  ModalFooter,
  Button
} from "reactstrap";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: true,
      userEmail: "",
      userPassword: ""
    };
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  closeModal = e => {
    console.log("CLOSE MODAl");
    e.preventDefault();

    this.toggleModal();
    this.setState({});
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    console.log("SUBMIT FORM");
    e.preventDefault();
    console.log("This state: ", this.state);
  };

  render() {
    return (
      <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
        <ModalHeader toggle={this.closeModal}>Sign In</ModalHeader>

        <ModalBody>
          <Form className="form">
            <FormGroup row id="nameIsHidden" style={{ display: "none" }}>
              <Label sm={2}>Name</Label>
              <Col sm={10}>
                <Input
                  name="userName"
                  type="text"
                  placeholder="User Name"
                  autoComplete="userName"
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Email</Label>
              <Col sm={10}>
                <Input
                  required
                  name="userEmail"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Password</Label>
              <Col sm={10}>
                <Input
                  required
                  name="userPassword"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={this.handleChange}
                />
                <FormFeedback></FormFeedback>
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>

        <ModalFooter>
          <Col>
            <h6>
              Don't have an account?<NavLink to="/signup"> Sign up</NavLink>
            </h6>
          </Col>
          <Button type="submit" color="primary" onClick={this.onFormSubmit}>
            Sign In
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default SignIn;
