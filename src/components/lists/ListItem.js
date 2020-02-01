import React, { useState } from "react";
import {
  Card,
  CardTitle,
  Badge,
  Button,
  CardBody,
  // ButtonDropdown,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
  // CardText
  // CardColumns
} from "reactstrap";

import TaskItem from "../tasks/TaskItem";

const ListItem = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    // <CardColumns>
    <Card style={cardStyle}>
      <CardTitle style={titleStyle}>
        <div>
          List title{" "}
          <Badge pill style={badgeStyle}>
            1
          </Badge>
        </div>

        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle
            tag="span"
            data-toggle="dropdown"
            aria-expanded={dropdownOpen}
          >
            <i className="material-icons" style={icStyle}>
              more_horiz
            </i>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>List Actions</DropdownItem>
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
      <CardBody style={cardBodyStyle}>
        <Button style={addTaskStyle}>
          <div style={buttonTextStyle}>
            <i className="material-icons">add</i> Add a new task
          </div>
        </Button>
        <TaskItem />
      </CardBody>
    </Card>
    // </CardColumns>
  );
};

const cardStyle = {
  position: "relative",
  display: "flex",
  width: "328px",
  height: "auto",

  top: "3.75em",
  margin: " 0 16px",
  background: "#FFFFFF",
  boxShadow:
    "0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14)",
  borderRadius: "4px"
};

const titleStyle = {
  position: "absolute",
  display: "flex",
  justifyContent: "space-between",
  width: "326px",
  height: "60px",
  padding: "0 20px",
  background: "#F9F9F9",
  boxShadow: " 0px 1px 0px rgba(0, 0, 0, 0.15)",
  borderRadius: "4px 4px 0px 0px",

  alignItems: "center",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "1.25em",
  lineHeight: "1.5em",
  color: "rgba(0, 0, 0, 0.87)"
};

const badgeStyle = {
  backgroundColor: "#FBCED9",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "0.75em",
  marginLeft: "0.625em"
};

const icStyle = {
  color: "rgba(0, 0, 0, 0.6)",
  cursor: "pointer"
};

const cardBodyStyle = {
  position: "relative",
  marginTop: "60px",
  padding: "0"
};

const addTaskStyle = {
  position: "relative",
  width: "316px",
  height: "48px",
  left: "5px",
  top: "10px",
  marginBottom: "10px",
  background: "#FFFFFF",
  border: "1px solid rgba(0, 0, 0, 0.08)",
  boxShadow: " 0px 1px 3px rgba(0, 0, 0, 0.15)",
  borderRadius: "4px"
};

const buttonTextStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "1em",
  lineHeight: "1.25em",
  letterSpacing: "0.015625em",
  color: "rgba(0, 0, 0, 0.6)"
};

export default ListItem;
