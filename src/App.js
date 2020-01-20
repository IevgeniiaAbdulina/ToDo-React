import React from "react";
import { Container, Row, Col } from "reactstrap";

import Header from "./components/header/Header";
import RegisterModal from "./components/header/RegisterModal";
import LoginModal from "./components/header/LoginModal";

import "./App.css";

// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: "https://cc19todoapp.herokuapp.com"
// });

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  componentDidMount() {
    // axiosInstance
    //   .get("/api/users/me")
    //   .then(res => console.log(res.data))
    //   .then(res => this.setState({ userID: res.data }));
  }

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
