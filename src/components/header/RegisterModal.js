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

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://cc19todoapp.herokuapp.com"
});

class RegisterModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginUser: "",
      emailUser: "",
      passwordUser: ""
    };
  }

  handleInputLogin = e => {
    this.setState({
      loginUser: e.target.value
    });
  };

  handleInputEmail = e => {
    this.setState({
      emailUser: e.target.value
    });
    console.log(e.target.value);
  };

  handleInputPassword = e => {
    this.setState({
      passwordUser: e.target.value
    });
    console.log(e.target.value);
  };

  handlePostUserRegister = () => {
    axiosInstance
      .post("/api/users/", {
        login: this.state.loginUser,
        email: this.state.emailUser,
        password: this.state.passwordUser
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err, err.res);
      });
  };

  postUserRegister = () => {
    this.props.onClose();
    this.handlePostUserRegister();
  };

  render() {
    return (
      <Modal isOpen={this.props.show} toggle={this.props.onClose}>
        <ModalHeader toggle={this.props.onClose}>Register</ModalHeader>

        <ModalBody>
          <Form>
            <FormGroup row>
              <Label sm={2}>Name</Label>

              <Col sm={10}>
                <Input
                  id="loginUser"
                  type="text"
                  placeholder="Name"
                  autoComplete="username"
                  value={this.state.loginUser}
                  onChange={this.handleInputLogin}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Email</Label>

              <Col sm={10}>
                <Input
                  id="emailUser"
                  type="emil"
                  placeholder="Email"
                  autoComplete="email"
                  value={this.state.emailUser}
                  onChange={this.handleInputEmail}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Password</Label>

              <Col sm={10}>
                <Input
                  id="passwordUser"
                  type="password"
                  placeholder="Password"
                  autoComplete="new-password"
                  value={this.state.passwordUser}
                  onChange={this.handleInputPassword}
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" type="submit" onClick={this.postUserRegister}>
            Register
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default RegisterModal;
