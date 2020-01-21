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

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailUser: "",
      passwordUser: ""
    };
  }

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

  handlePostUserData = () => {
    axiosInstance
      .post("/api/auth/", {
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

  postUserData = () => {
    this.props.onClose();
    this.handlePostUserData();
  };

  render() {
    return (
      <Modal isOpen={this.props.show} toggle={this.props.onClose}>
        <ModalHeader toggle={this.props.onClose}>Log In</ModalHeader>

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
                <Input
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
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  value={this.state.passwordUser}
                  onChange={this.handleInputPassword}
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
    );
  }
}

const nameHidden = {
  display: "none"
};

export default LoginModal;
