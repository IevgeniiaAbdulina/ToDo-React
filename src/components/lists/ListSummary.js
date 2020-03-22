import React, { useState } from "react";
import {
  Card,
  CardTitle,
  Badge,
  Dropdown,
  CardBody,
  // Button,
  Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import TasksCatalog from "../tasks/TasksCatalog";
import CreateTaskLink from "../tasks/CreateTaskLink";

const ListSummary = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Container>
        <Card>
          <CardTitle className="card-list-title">
            <div>
              List title{" "}
              <Badge pill className="list-badge">
                4
              </Badge>
            </div>

            <Dropdown isOpen={isOpen} toggle={toggle}>
              <DropdownToggle tag="span" data-toggle="dropdown">
                <i className="material-icons ic-more-horiz">more_horiz</i>
              </DropdownToggle>

              <DropdownMenu right>
                <DropdownItem header>List actions</DropdownItem>
                <DropdownItem divider />

                <DropdownItem>Rename list</DropdownItem>
                <DropdownItem>Delete list</DropdownItem>
                <DropdownItem divider />

                <DropdownItem>Show all tasks</DropdownItem>
                <DropdownItem>Show all checked tasks</DropdownItem>
                <DropdownItem>Show all unchecked tasks</DropdownItem>
              </DropdownMenu>
            </Dropdown>
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
