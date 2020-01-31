import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import ListItem from "./lists/ListItem";
// import Lists from "./lists/Lists";

class ListsShow extends React.Component {
  render() {
    return (
      <div style={pageStyle}>
        <Container fluid={true}>
          <Row>
            <Col>
              <h5>Keep your brain organized</h5>
            </Col>
            <Col md={{ span: 3, offset: 3 }}>
              <Button style={buttonAddListStyle}>Add List</Button>
            </Col>
          </Row>
          <div style={listsStyle}>
            {/* <Lists /> */}
            <ListItem />
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
