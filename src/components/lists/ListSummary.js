import React from "react";
import {
  Card,
  CardTitle,
  Badge,
  Dropdown,
  CardBody,
  Button,
  Container
} from "reactstrap";

import TasksCatalog from "../tasks/TasksCatalog";
import CreateTaskLink from "../tasks/CreateTaskLink";

const ListSummary = () => {
  return (
    <div>
      <Container>
        <Card className="card-list">
          <CardTitle className="card-list-title">
            <div>
              List title{" "}
              <Badge pill className="list-badge">
                4
              </Badge>
            </div>

            <Dropdown></Dropdown>
          </CardTitle>

          <CardBody className="card-body-style">
            <CreateTaskLink />
            <TasksCatalog />
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

export default ListSummary;
