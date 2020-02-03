import React from "react";
import {
  Card,
  CardTitle,
  Badge,
  Button,
  CardBody,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  FormGroup,
  Input
} from "reactstrap";

import axios from "axios";
axios.defaults.headers.common["x-auth-token"] = `${localStorage.getItem(
  "token"
)}`;
const axiosInstance = axios.create({
  baseURL: "https://cc19todoapp.herokuapp.com"
});
// axios.defaults.headers.common["x-auth-token"] = `${localStorage.getItem(
//   "token"
// )}`;

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    // this.onChange = this.onChange.bind(this);

    this.state = {
      dropdownOpen: false,
      listName: "",
      userId: ""
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  onchange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  getUserId = () => {
    // auth....?
  };

  handlePostNewList = () => {
    axiosInstance
      .post("/api/lists/", {
        name: this.state.listName
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  saveListName = e => {
    e.preventDefault();
    this.handlePostNewList();
    // post new LIST to DB
    // get LIST to user
  };

  render() {
    return (
      <div>
        <Card style={formCardStyle}>
          <FormGroup style={formStyle}>
            <Input
              type="textarea"
              name="listName"
              id="taskTextName"
              placeholder="Task name..."
              value={this.state.listName}
              onChange={this.onchange}
              required
            />
          </FormGroup>
          <div style={btnContainerStyle}>
            <Button color="primary" onClick={this.handlePostNewList}>
              Save
            </Button>
            <i className="material-icons" style={icFormStyle}>
              close
            </i>
          </div>
        </Card>

        <Card>
          <div className="card-list" style={cardStyle}>
            <CardTitle style={titleStyle}>
              <div>
                List title{" "}
                <Badge pill style={badgeStyle}>
                  1
                </Badge>
              </div>

              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle
                  tag="span"
                  data-toggle="dropdown"
                  // aria-expanded={this.state.dropdownOpen}
                >
                  <i className="material-icons" style={icStyle}>
                    more_horiz
                  </i>
                </DropdownToggle>
                <DropdownMenu
                  right
                  modifiers={{
                    setMaxHeight: {
                      enabled: true,
                      order: 890,
                      fn: data => {
                        return {
                          ...data,
                          styles: {
                            ...data.styles,
                            overflow: "auto",
                            maxHeight: "160px"
                          }
                        };
                      }
                    }
                  }}
                >
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
              {/* <TaskItem /> */}
            </CardBody>
          </div>
        </Card>
      </div>
    );
  }
}

const formCardStyle = {
  padding: "5px 5px"
};

const btnContainerStyle = {
  display: "flex",
  alignItems: "center"
};

const icFormStyle = {
  color: "rgba(0, 0, 0, 0.6)",
  cursor: "pointer",
  margin: "0 20px"
};

const formStyle = {
  position: "relative",
  display: "flex",
  width: "100%",
  height: "60px",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "1.25em",
  lineHeight: "1.5em",
  color: "rgba(0, 0, 0, 0.87)"
};

const cardStyle = {
  position: "relative",
  display: "flex",
  width: "100%",
  height: "auto",

  background: "#FFFFFF",
  boxShadow:
    "0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14)",
  borderRadius: "4px"
};

const titleStyle = {
  position: "absolute",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
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
  padding: "10px 5px"
};

const addTaskStyle = {
  position: "relative",
  width: "100%",
  height: "48px",
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
