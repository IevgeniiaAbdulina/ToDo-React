import React from "react";
import { Container, Row, Col, NavLink, Button } from "reactstrap";
// import { NavLink } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      {/* <div>Create new list here > </div>
      <NavLink to="/create/list">Create List</NavLink> */}

      <Container fluid={true}>
        <Row className="dashboard-header-title">
          <Col>
            <h6>Keep your brain organized</h6>
          </Col>
          <Col md={{ span: 3, offset: 3 }}>
            <Button size="sm" color="primary" className="create-list-button">
              <NavLink href="/create/list">Add List</NavLink>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardHeader;
