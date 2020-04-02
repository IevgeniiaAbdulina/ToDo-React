import React from "react";
import { Container, Row, Col } from "reactstrap";

const DashboardTitle = () => {
  return (
    <div className="dashboard-header">
      <Container fluid={true}>
        <Row>
          <Col className="text-center">
            <h4>Capture your ideas and inspirations in notes.</h4>
            <h6>Light, clean and free application.</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardTitle;
