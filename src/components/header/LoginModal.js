import React from "react";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Form,
  Col,
  Label,
  Input,
  Button
} from "reactstrap";
import { Redirect } from "react-router-dom";

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://cc19todoapp.herokuapp.com"
});

class LoginModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emailUser: "",
      passwordUser: "",
      errorMessage: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handlePostUserData = () => {
    axiosInstance
      .post("/api/auth/", {
        email: this.state.emailUser,
        password: this.state.passwordUser
      })
      .then(res => {
        localStorage.setItem("token", res.data);
        this.setState({});
      })
      .catch(err => {
        if (err) {
          this.setState({
            errorMessage: "Invalid login or password."
          });
          return;
        }
      });
  };

  isAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token && token.length > 10;
  };

  postUserData = () => {
    this.props.onClose();
    this.handlePostUserData();
  };

  render() {
    const isAlreadyAuthenticated = this.isAuthenticated();
    return (
      <div>
        {isAlreadyAuthenticated ? (
          <Redirect to="/user" />
        ) : (
          <Modal
            isOpen={this.props.show}
            toggle={this.props.onClose}
            onSubmit={this.isAuthenticated}
          >
            <ModalHeader toggle={this.props.onClose}>Log In</ModalHeader>

            <ModalBody>
              <Form>
                <FormGroup id="userNameHidden" row style={nameHidden}>
                  <Label sm={2}>Name</Label>

                  <Col sm={10}>
                    <Input
                      name="loginUser"
                      id="loginUserLog"
                      type="text"
                      placeholder="Name"
                      autoComplete="username"
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label sm={2}>Email</Label>

                  <Col sm={10}>
                    <Input
                      name="emailUser"
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
                      name="passwordUser"
                      type="password"
                      placeholder="Password"
                      autoComplete="current-password"
                      value={this.state.passwordUser}
                      onChange={this.onChange}
                    />
                  </Col>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="success" type="submit" onClick={this.postUserData}>
                Log In
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </div>
    );
  }
}

const nameHidden = {
  display: "none"
};

export default LoginModal;
