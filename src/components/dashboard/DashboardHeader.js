import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

import CreateList from "../lists/CreateList";

const DashboardHeader = () => {
  // const createListButton = () => {
  //   return <CreateList />;
  // };
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
            <Button
              color="primary"
              className="create-list-button"
              // onClick={createListButton}
              onClick={() => <CreateList />}
            >
              Add List
              {/* <NavLink href="/">Add List</NavLink> */}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardHeader;
