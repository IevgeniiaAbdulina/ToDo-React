import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../actions/authActions";
import { NavLink } from "react-router-dom";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Col,
  Input,
  FormFeedback,
  ModalFooter,
  Button,
  CardText,
  Spinner,
} from "reactstrap";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: true,
      userEmail: "",
      userPassword: "",
    };
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
    this.props.history.push("/");
  };

  closeModal = () => {
    this.toggleModal();
    this.setState({
      userEmail: "",
      userPassword: "",
    });
    this.props.history.push("/");
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  keyPressed = (e) => {
    if (e.key === "Enter") {
      this.props.signIn(this.state);
    }
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { auth, authError, loadingSpinner } = this.props;
    if (auth) return <Redirect to="/dashboard" />;
    return (
      <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
        <ModalHeader toggle={this.closeModal}>Sign In</ModalHeader>

        <ModalBody>
          <Form className="form">
            <FormGroup row id="nameIsHidden" style={{ display: "none" }}>
              <Label sm={2}>Name</Label>
              <Col sm={10}>
                <Input
                  name="userName"
                  type="text"
                  placeholder="User Name"
                  autoComplete="userName"
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Email</Label>
              <Col sm={10}>
                <Input
                  required
                  name="userEmail"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label sm={2}>Password</Label>
              <Col sm={10}>
                <Input
                  required
                  name="userPassword"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={this.handleChange}
                  onKeyPress={this.keyPressed}
                />
                <FormFeedback></FormFeedback>
              </Col>
            </FormGroup>
          </Form>
          <div>
            {authError ? (
              <CardText className="text-danger">{authError}</CardText>
            ) : null}
          </div>
        </ModalBody>

        <ModalFooter>
          <Col>
            <h6>
              Don't have an account?<NavLink to="/signup"> Sign up</NavLink>
            </h6>
          </Col>
          <Button type="submit" color="primary" onClick={this.onFormSubmit}>
            Sign In {loadingSpinner && <Spinner size="sm" color="light" />}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.auth.isSignedIn,
    loadingSpinner: state.auth.loadingSpinner,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
