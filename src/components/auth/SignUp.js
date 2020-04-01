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
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: true,
      userName: "",
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
    e.preventDefault();
    // console.log("This state: ", this.state);
  };

  render() {
    const token = localStorage.getItem("token");
    if (token) return <Redirect to="/" />;
    return (
      <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
        <ModalHeader toggle={this.closeModal}>Sign Up</ModalHeader>

        <ModalBody>
          <Form className="form">
            <FormGroup row>
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
              Already have an account?<NavLink to="/signin"> Sign In</NavLink>
            </h6>
          </Col>
          <Button type="submit" color="primary" onClick={this.onFormSubmit}>
            Sign Up
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default SignUp;
