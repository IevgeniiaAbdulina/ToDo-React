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

const LoginModal = props => {
  return (
    <Modal isOpen={props.show} toggle={props.onClose}>
      <ModalHeader toggle={props.onClose}>Log In</ModalHeader>

      <ModalBody>
        <Form>
          <FormGroup id="userNameHidden" row style={nameHidden}>
            <Label sm={2}>Name</Label>

            <Col sm={10}>
              <Input
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
              <Input type="emil" placeholder="Email" autoComplete="email" />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Password</Label>

            <Col sm={10}>
              <Input
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
            </Col>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button onClick={props.onClose}>Close</Button>

        <Button color="success" type="submit">
          Log In
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const nameHidden = {
  display: "none"
};

export default LoginModal;
