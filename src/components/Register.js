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
  Button
} from "reactstrap";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.toggleModalRegister = this.toggleModalRegister.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      loginUser: "",
      emailUser: "",
      passwordUser: "",
      showRegister: false
    };
  }

  toggleModalRegister() {
    this.setState({
      showRegister: !this.state.showRegister
    });
  }

  modalButtonRegister = () => {
    this.toggleModalRegister();
  };

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });

    e.preventDefault();
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
          <ModalHeader toggle={this.toggleModalRegister}>Register</ModalHeader>

          <ModalBody>
            <Form>
              <FormGroup row>
                <Label sm={2}>Name</Label>

                <Col sm={10}>
                  <Input
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
                    name="passwordUser"
                    id="passwordUser"
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    value={this.state.passwordUser}
                    onChange={this.onChange}
                  />
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>

          <ModalFooter>
            <Button
              color="success"
              type="submit"
              onClick={this.modalButtonRegister}
            >
              Register
            </Button>
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
