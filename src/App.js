import React from "react";
import { Container, Row, Col } from "reactstrap";

import Header from "./components/header/Header";
import RegisterModal from "./components/header/RegisterModal";
import LoginModal from "./components/header/LoginModal";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginShow = this.handleLoginShow.bind(this);
    this.handleLoginClose = this.handleLoginClose.bind(this);
    this.handleRegisterShow = this.handleRegisterShow.bind(this);
    this.handleRegisterClose = this.handleRegisterClose.bind(this);
    this.state = {
      showLogin: false,
      showRegister: false,
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
      <div className="body-app">
        <header>
          <Header 
            onLoginClick={this.handleLoginShow}
            onRegisterClick={this.handleRegisterShow} 
          />
        </header>
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
                onClose={this.handleLoginClose} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
