import React from "react";

import { Container, Row, Col } from "reactstrap";

import Header from "./Header";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginShow = this.handleLoginShow.bind(this);
    this.handleLoginClose = this.handleLoginClose.bind(this);
    this.handleRegisterShow = this.handleRegisterShow.bind(this);
    this.handleRegisterClose = this.handleRegisterClose.bind(this);
    this.state = {
      showLogin: false,
      showRegister: false
    };
  }

  handleLoginShow() {
    this.setState({ showLogin: true });
  }

  handleLoginClose() {
    this.setState({ showLogin: false });
  }

  handleRegisterShow() {
    this.setState({ showRegister: true });
  }

  handleRegisterClose() {
    this.setState({ showRegister: false });
  }

  render() {
    return (
      <div>
        <header>
          <Header
            onLoginClick={this.handleLoginShow}
            onRegisterClick={this.handleRegisterShow}
          />
        </header>
        <h4>
          You are not logged in. You must log in to view the page at /user
        </h4>
        <Container>
          <Row>
            <Col>
              <RegisterModal
                show={this.state.showRegister}
                onClose={this.handleRegisterClose}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <LoginModal
                show={this.state.showLogin}
                onClose={this.handleLoginClose}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
