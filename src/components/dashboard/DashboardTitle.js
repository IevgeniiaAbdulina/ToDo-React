import React from "react";
import { Container, Row, Col, NavLink, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

const DashboardTitle = () => {
  const token = localStorage.getItem("token");
  if (token) return <Redirect to="/dashboard" />;

  return (
    <div className="dashboard-header">
      <Container fluid={true}>
        <Row>
          <Col className="text-center">
            <h3>Capture your ideas and inspirations in notes.</h3>
            <p>Light, clean and free application.</p>
            <Button size="sm" className="dashboard-button" color="info">
              <NavLink href="/signup">Get started</NavLink>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardTitle;
