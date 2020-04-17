import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const DashboardHeader = () => {
  const buttonClicked = () => {
    console.log("ADD LIST CLICKED");
  };
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
              onClick={buttonClicked}
            >
              New list
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardHeader;
