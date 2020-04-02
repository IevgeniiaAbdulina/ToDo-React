import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

import CreateList from "../lists/CreateList";

const DashboardHeader = () => {
  // const createListButton = () => {
  //   return <CreateList />;
  // };
  return (
    <div className="dashboard-header">
      <Container fluid={true}>
        <Row className="dashboard-header-title">
          <Col>
            <h6>Keep your brain organized</h6>
          </Col>
          <Col md={{ span: 3, offset: 3 }}>
            <Button
              color="primary"
              className="create-list-button"
              // onClick={createListButton}
              onClick={() => <CreateList />}
            >
              Add List
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardHeader;
