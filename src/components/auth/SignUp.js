import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
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
  CardText
} from "reactstrap";
import { signUp } from "../../actions/signupActions";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: true,
      userName: "",
      userEmail: "",
      userPassword: ""
    };
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  closeModal = () => {
    this.toggleModal();
    this.setState({
      userName: "",
      userEmail: "",
      userPassword: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { signup, signupError } = this.props;
    if (signup) return <Redirect to="/signin" />;

    return (
      <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
        <ModalHeader toggle={this.closeModal}>Sign Up</ModalHeader>

        <ModalBody>
          <Form className="form">
            <FormGroup row>
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
                />
                <FormFeedback></FormFeedback>
              </Col>
            </FormGroup>
          </Form>

          <div>
            {signupError ? (
              <CardText className="text-danger">{signupError}</CardText>
            ) : (
              <CardText>{signup}</CardText>
            )}
          </div>
        </ModalBody>

        <ModalFooter>
          <Col>
            <h6>
              Already have an account?<NavLink to="/signin"> Sign in</NavLink>
            </h6>
          </Col>
          <Button type="submit" color="primary" onClick={this.onFormSubmit}>
            Sign Up
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    signupError: state.signupState.signupError,
    signup: state.signupState.signup
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: credentials => dispatch(signUp(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
