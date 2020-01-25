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

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      emailUser: "",
      passwordUser: "",
      showLogin: false
    };
  }

  toggleModal() {
    this.setState({
      showLogin: !this.state.showLogin
    });
  }

  modalButtonSubmit = () => {
    this.toggleModal();
  };

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
    console.log(value);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <NavLink
          className="btn"
          style={buttonStyle}
          onClick={() => this.toggleModal()}
        >
          Log In
        </NavLink>

        <Modal isOpen={this.state.showLogin} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Log In</ModalHeader>

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
            <Button
              color="success"
              type="submit"
              onClick={this.modalButtonSubmit}
            >
              Log In
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

const nameHidden = {
  display: "none"
};

export default Login;
