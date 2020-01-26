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
      showRegister: false
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

    e.preventDefault();
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
      })
      .catch(err => {
        console.log(err, err.res);
      });
  };

  //   modalButtonRegister = () => {
  //     this.toggleModalRegister();
  //     this.handlePostUserRegister();
  //   };

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
                    required
                    name="loginUser"
                    id="loginUser"
                    type="text"
                    placeholder="Name"
                    autoComplete="username"
                    value={this.state.loginUser}
                    onChange={this.onChange}
                    valid={this.state.setValidated}
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
                  />
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
            <Button onClick={this.toggleModalRegister}>Close</Button>
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
