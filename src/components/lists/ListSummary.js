import React, { useState } from "react";
import {
  Card,
  CardTitle,
  Badge,
  Dropdown,
  CardBody,
  Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import TasksCatalog from "../tasks/TasksCatalog";
import CreateTaskLink from "../tasks/CreateTaskLink";
import CreateTask from "../tasks/CreateTask";
import { deleteList } from "../../actions/listActions";
import { connect } from "react-redux";

const ListSummary = ({ list, tasks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const currentTasks = tasks.filter((task) => task._listID === list._id);
  const listID = list._id;

  return (
    <div>
      <Container>
        <Card>
          <CardTitle className="card-list-title">
            <div>
              {list.name}
              <Badge pill className="list-badge">
                {currentTasks.length}
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
                <DropdownItem onClick={() => list.deleteList(listID)}>
                  Delete list
                </DropdownItem>
                <DropdownItem divider />

                <DropdownItem>Show all tasks</DropdownItem>
                <DropdownItem>Show all checked tasks</DropdownItem>
                <DropdownItem>Show all unchecked tasks</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </CardTitle>

          <CardBody className="card-body-style">
            <CreateTaskLink />
            <CreateTask />

            <TasksCatalog tasks={currentTasks} />
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    isDeleteList: (listID) => {
      dispatch(deleteList(listID));
    },
  };
};

export default connect(null, mapDispatchToProps)(ListSummary);
