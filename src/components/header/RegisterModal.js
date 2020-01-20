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
              <Input type="text" placeholder="Name" autoComplete="username" />
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
                autoComplete="new-password"
              />
            </Col>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="success" type="submit" onClick={props.onClose}>
          Register
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default RegisterModal;
