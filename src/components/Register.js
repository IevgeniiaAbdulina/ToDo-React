import React from "react";

import {
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Form,
  Col,
  Label,
  Input,
  Button,
  FormFeedback,
  Spinner
} from "reactstrap";

import { Redirect } from "react-router-dom";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://cc19todoapp.herokuapp.com"
});

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.toggleModalRegister = this.toggleModalRegister.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handlePostUserRegister = this.handlePostUserRegister.bind(this);
    this.submitRegister = this.submitRegister.bind(this);

    this.state = {
      loginUser: "",
      emailUser: "",
      passwordUser: "",
      showRegister: false,
      responseDataUser: "",
      validInput: null,
      invalidInput: null,
      loadingSpinner: false
    };
  }

  toggleModalRegister() {
    this.setState({
      showRegister: !this.state.showRegister
    });
  }

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  handlePostUserRegister = () => {
    this.setState({
      loadingSpinner: true
    });

    axiosInstance
      .post("/api/users", {
        login: this.state.loginUser,
        email: this.state.emailUser,
        password: this.state.passwordUser
      })
      .then(res => {
        localStorage.setItem("login", res.data.login);
        this.setState({
          responseDataUser:
            "Congratulation! You have been successfully registered. Please log in to start.",
          validInput: true
        });
      })
      .catch(err => {
        console.log(err, err.res);
        this.setState({
          responseDataUser:
            "Sorry your email or password was incorrect! Please try again.",
          invalidInput: true
        });
      })
      .then(() => {
        this.setState({
          loadingSpinner: false
        });
      });
  };

  submitRegister = e => {
    this.toggleModalRegister();
    e.preventDefault();
    this.setState({
      loginUser: "",
      emailUser: "",
      passwordUser: "",
      responseDataUser: "",
      validInput: null,
      invalidInput: null
    });
  };

  render() {
    const registeredUser = localStorage.getItem("login");

    return (
      <div>
        {registeredUser ? (
          <Redirect to="/login" />
        ) : (
          <NavLink
            className="btn"
            style={buttonStyle}
            onClick={() => this.toggleModalRegister()}
          >
            Register
          </NavLink>
        )}
        <Modal
          isOpen={this.state.showRegister}
          toggle={this.toggleModalRegister}
        >
          <ModalHeader toggle={this.submitRegister}>Register</ModalHeader>

          <ModalBody>
            <Form className="form">
              <FormGroup row>
                <Label sm={2}>Name</Label>

                <Col sm={10}>
                  <Input
                    required
                    name="loginUser"
                    id="loginUser"
                    type="text"
                    placeholder="Name"
                    autoComplete="username"
                    value={this.state.loginUser}
                    onChange={this.onChange}
                    valid={this.state.validInput}
                    invalid={this.state.invalidInput}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm={2}>Email</Label>

                <Col sm={10}>
                  <Input
                    required
                    name="emailUser"
                    id="emailUser"
                    type="emil"
                    placeholder="Email"
                    autoComplete="email"
                    value={this.state.emailUser}
                    onChange={this.onChange}
                    valid={this.state.validInput}
                    invalid={this.state.invalidInput}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm={2}>Password</Label>

                <Col sm={10}>
                  <Input
                    required
                    name="passwordUser"
                    id="passwordUser"
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    value={this.state.passwordUser}
                    onChange={this.onChange}
                    valid={this.state.validInput}
                    invalid={this.state.invalidInput}
                  />
                  <FormFeedback valid={this.state.validInput}>
                    {this.state.responseDataUser}
                  </FormFeedback>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>

          <ModalFooter>
            <Button onClick={this.submitRegister}>Close</Button>

            <Button
              color="primary"
              type="submit"
              onClick={this.handlePostUserRegister}
            >
              Register{" "}
              {this.state.loadingSpinner && <Spinner size="sm" color="light" />}
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const buttonStyle = {
  color: "#fff",
  fontWeight: 500
};

export default Register;
