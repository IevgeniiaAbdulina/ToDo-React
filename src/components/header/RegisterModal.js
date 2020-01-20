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

function getLoginValue() {
  const login = document.getElementById("loginUser").value;
  const email = document.getElementById("emailUser").value;
  const password = document.getElementById("passwordUser").value;
  console.log("this is input value" + login + " " + email + " " + password);
}

const sendRegisterUser = () => {
  const loginUser = document.getElementById("loginUser").value;
  const emailUser = document.getElementById("emailUser").value;
  const passwordUser = document.getElementById("passwordUser").value;

  axiosInstance
    .post("/api/users/", {
      login: loginUser,
      email: emailUser,
      password: passwordUser
    })
    .then(res => {
      console.log(res);
    })
    .then(err => {
      console.log(err, err.res);
    });
};

const RegisterModal = props => {
  console.log(props);

  return (
    <Modal isOpen={props.show} toggle={props.onClose}>
      <ModalHeader toggle={props.onClose}>Register</ModalHeader>

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
              />
            </Col>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button onClick={props.onClose}>Close</Button>
        <Button
          color="success"
          type="submit"
          onClick={() => {
            getLoginValue();
            sendRegisterUser();
          }}
        >
          Register
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default RegisterModal;
