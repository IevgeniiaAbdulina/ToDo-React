import React from "react";
import { Container, Row, Col, CardColumns, Button } from "reactstrap";
import ListItem from "./lists/ListItem";

import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://cc19todoapp.herokuapp.com"
});
axios.defaults.headers.common["x-auth-token"] = `${localStorage.getItem(
  "token"
)}`;

class ListsShow extends React.Component {
  constructor(props) {
    super(props);

    // this.isListShow = this.isListShow.bind(this);

    this.state = {
      lists: [
        { id: 1, body: 11 }
        // { id: 2, body: 22 },
        // { id: 3, body: 33 }
      ],
      // showList: false
      userId: "",
      nameList: "",
      responseErr: ""
    };
  }

  addNewList = () => {
    axiosInstance
      .post("/api/lists/", {
        _userID: this.state.userId,
        name: this.state.nameList
      })
      .then(res => {
        console.log(res);
        this.setState({
          _userID: res.user._id,
          name: res.body.name
        }).catch(err => {
          console.log(err);
          this.setState({
            responseErr: "Alert!"
          });
        });
      });
  };

  onShowList = () => {
    console.log("add list");
    this.addNewList();
    console.log(axios.defaults.headers.common["x-auth-token"]);

    // this.setState({
    //   showList: true
    // });
  };

  // isListShow() {
  //   if (this.state.showList) {
  //     return <ListItem />;
  //   }
  // }

  render() {
    return (
      <div style={pageStyle}>
        <Container fluid={true}>
          <Row>
            <Col>
              <h5>Keep your brain organized</h5>
            </Col>
            <Col md={{ span: 3, offset: 3 }}>
              <Button style={buttonAddListStyle} onClick={this.onShowList}>
                Add List
              </Button>
            </Col>
          </Row>
          <div style={listsStyle}>
            <CardColumns>
              {this.state.lists.map((list, index) => {
                return <ListItem key={list.id} body={list.body} />;
              })}
              {/* {this.isListShow()} */}
              {/* <ListItem /> */}
            </CardColumns>
          </div>
        </Container>
      </div>
    );
  }
}

const pageStyle = {
  top: "3.75em",
  color: "#fff",
  position: "relative"
};

const buttonAddListStyle = {
  margin: "0 16px",
  backgroundColor: "#06D8D8",
  fontWeight: 700
};

const listsStyle = {
  marginTop: "3.75em"
};

export default ListsShow;
