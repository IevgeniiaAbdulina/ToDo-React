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
  FormFeedback,
  Spinner
} from "reactstrap";
import { Redirect } from "react-router-dom";

// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "https://cc19todoapp.herokuapp.com"
// });

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.onChange = this.onChange.bind(this);
    // this.handlePostUserLogin = this.handlePostUserLogin.bind(this);
    this.submitLogin = this.submitLogin.bind(this);

    this.state = {
      emailUser: "",
      passwordUser: "",
      showLogin: false,
      responseDataUser: "",
      validInput: null,
      invalidInput: null,
      loadingSpinner: false
    };
  }

  toggleModal() {
    this.setState({
      showLogin: !this.state.showLogin
    });
  }

  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  // handlePostUserLogin = () => {
  //   this.setState({
  //     loadingSpinner: true
  //   });

  //   axiosInstance
  //     .post(
  //       "/api/auth/",
  //       {
  //         email: this.state.emailUser,
  //         password: this.state.passwordUser
  //       },
  //       {
  //         cancelToken: source.token
  //       }
  //     )
  //     .then(res => {
  //       console.log(res);
  //       localStorage.setItem("login", res.data.login);
  //       localStorage.setItem("token", res.data.token);
  //       this.setState({
  //         responseDataUser:
  //           "You have successfully logged in to your ToDo List.",
  //         validInput: true
  //       });
  //       this.props.onLoggedInEventChild();
  //     })
  //     .catch(err => {
  //       console.log(err, err.res);
  //       this.setState({
  //         responseDataUser:
  //           "Sorry your email or password was incorrect! Please try again.",
  //         invalidInput: true
  //       });
  //     })
  //     .then(() => {
  //       this.setState({
  //         loadingSpinner: false
  //       });
  //     });
  // };

  submitLogin = e => {
    e.preventDefault();
    this.toggleModal();
    // should I try this.setState({}) ???
    this.setState({
      emailUser: "",
      passwordUser: "",
      showLogin: false,
      responseDataUser: "",
      validInput: null,
      invalidInput: null,
      loadingSpinner: false
    });
  };

  handleButtonLoginClick = () => {
    this.setState({
      loadingSpinner: true
    });
    const emailUser = this.state.emailUser;
    const passwordUser = this.state.passwordUser;

    this.props.userIsLogged(emailUser, passwordUser);
    const login = localStorage.getItem("login");

    if (login) {
      this.setState({
        responseDataUser: "You have successfully logged in to your ToDo List.",
        validInput: true
      });
    } else {
      this.setState({
        responseDataUser:
          "Sorry your email or password was incorrect! Please try again.",
        invalidInput: true
      });
    }

    this.props.onLoggedInEventChild();
    // this.props.onLoginButtonCLicked();
  };

  render() {
    const isAuthenticated = localStorage.getItem("token");

    return (
      <div>
        {isAuthenticated ? (
          <Redirect push to="/user" />
        ) : (
          <NavLink
            className="btn"
            style={buttonStyle}
            onClick={() => this.toggleModal()}
          >
            Log In
          </NavLink>
        )}

        <Modal isOpen={this.state.showLogin} toggle={this.toggleModal}>
          <ModalHeader toggle={this.submitLogin}>Log In</ModalHeader>

          <ModalBody>
            <Form className="form">
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
                    required
                    name="emailUser"
                    type="emil"
                    placeholder="Email"
                    autoComplete="email"
                    value={this.state.emailUser}
                    onChange={this.onChange}
                    valid={this.state.validInput}
                    invalid={this.state.invalidInput}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label sm={2}>Password</Label>

                <Col sm={10}>
                  <Input
                    required
                    name="passwordUser"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    value={this.state.passwordUser}
                    onChange={this.onChange}
                    valid={this.state.validInput}
                    invalid={this.state.invalidInput}
                  />
                  <FormFeedback valid={this.state.validInput}>
                    {this.state.responseDataUser}
                  </FormFeedback>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            {/* <Button onClick={this.submitLogin}>Close</Button> */}

            <Button
              color="primary"
              type="submit"
              // onClick={this.handlePostUserLogin}

              // onClick={() => {
              //   this.props.userIsLogged();
              //   this.props.onLoggedInEventChild();
              //   this.props.onLoginButtonCLicked();
              // }}
              onClick={this.handleButtonLoginClick}
            >
              Log In{" "}
              {this.state.loadingSpinner && <Spinner size="sm" color="light" />}
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const buttonStyle = {
  color: "#fff",
  fontWeight: 500
};

const nameHidden = {
  display: "none"
};

export default Login;
