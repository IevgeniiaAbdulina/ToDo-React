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
  FormFeedback
} from "reactstrap";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://cc19todoapp.herokuapp.com"
});

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.toggleModalRegister = this.toggleModalRegister.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      loginUser: "",
      emailUser: "",
      passwordUser: "",
      showRegister: false,
      response: "",
      isRegisterOk: null,
      validInput: null,
      invalidInput: null
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
    axiosInstance
      .post("/api/users", {
        login: this.state.loginUser,
        email: this.state.emailUser,
        password: this.state.passwordUser
      })
      .then(res => {
        console.log(res);
        this.setState({
          response: "You are successful register!",
          isRegisterOk: true,
          validInput: true
        });
      })
      .catch(err => {
        console.log(err, err.res);
        this.setState({
          response: "Sorry your email or password not correct!",
          isRegisterOk: false,
          invalidInput: true
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
      response: "",
      isRegisterOk: null,
      validInput: null,
      invalidInput: null
    });
  };

  render() {
    return (
      <div>
        <NavLink
          className="btn"
          style={buttonStyle}
          onClick={() => this.toggleModalRegister()}
        >
          Register
        </NavLink>

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
                  <FormFeedback
                    value={this.state.response}
                    valid={this.state.isRegisterOk}
                    invalid={this.state.response}
                  >
                    {this.state.response}
                  </FormFeedback>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>

          <ModalFooter>
            <Button
              color="success"
              type="submit"
              onClick={this.handlePostUserRegister}
            >
              Register
            </Button>
            <Button onClick={this.submitRegister}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const buttonStyle = {
  color: "#fff"
};

export default Register;
