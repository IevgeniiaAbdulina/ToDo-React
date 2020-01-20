import React from "react";
import { Container, Row, Col } from "reactstrap";

import Header from "./components/header/Header";
import RegisterModal from "./components/header/RegisterModal";
import LoginModal from "./components/header/LoginModal";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  componentDidMount() {}

  render() {
    return (
      <div className="body-app">
        <header>
          <Header onClick={this.handleShow} />
        </header>
        <Container>
          <Row>
            <Col>
              <RegisterModal
                show={this.state.show}
                onClose={this.handleClose}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <LoginModal show={this.state.show} onClose={this.handleClose} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
