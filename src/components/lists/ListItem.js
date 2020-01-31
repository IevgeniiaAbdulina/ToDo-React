import React from "react";
import {
  Card,
  CardTitle,
  Badge,
  Button,
  CardBody,
  CardText
  // CardColumns
} from "reactstrap";

const ListItem = () => {
  return (
    // <CardColumns>
    <Card style={cardStyle}>
      <CardTitle style={titleStyle}>
        <div>
          List title{" "}
          <Badge pill style={badgeStyle}>
            3
          </Badge>
        </div>

        <i class="material-icons">more_horiz</i>
      </CardTitle>
      <Button style={addTaskStyle}>
        <div style={buttonTextStyle}>
          <i class="material-icons">add</i> Add a new task
        </div>
      </Button>
      <CardBody>
        <CardText>task</CardText>
      </CardBody>
    </Card>
    // </CardColumns>
  );
};

const cardStyle = {
  position: "relative",
  display: "flex",
  width: "328px",
  height: "128px",
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
  fontSize: "1.125em",
  marginLeft: "0.625em"
};

const addTaskStyle = {
  position: "relative",
  width: "316px",
  height: "48px",
  left: "5px",
  top: "70px",
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
