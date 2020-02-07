import React from "react";
import { Container, Row, Col, CardColumns, Button } from "reactstrap";
import ListItem from "./lists/ListItem";

class ListsShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [{ id: 1, body: 11 }],
      userId: "",
      nameList: "",
      responseErr: ""
    };
  }

  onShowList = () => {
    console.log("add list");
  };

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
              {this.state.lists.map(list => {
                return <ListItem key={list.id} body={list.body} />;
              })}
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
