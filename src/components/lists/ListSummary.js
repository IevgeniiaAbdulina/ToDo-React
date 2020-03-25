import React, { useState } from "react";
// import PropTypes from "prop-types";
import {
  Card,
  CardTitle,
  Badge,
  Dropdown,
  CardBody,
  Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import TasksCatalog from "../tasks/TasksCatalog";
import CreateTaskLink from "../tasks/CreateTaskLink";
import CreateTask from "../tasks/CreateTask";
// import { connect } from "react-redux";

const ListSummary = ({ list, tasks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const currentTasks = tasks.filter(task => task._listID === list._id);

  // editList();
  // deleteList();
  // getTasks();
  // setTaskChecked();
  // setTaskUnchecked();

  // Show / hide <CreateTask />

  return (
    <div>
      <Container>
        <Card>
          <CardTitle className="card-list-title">
            <div>
              {list.name}
              <Badge pill className="list-badge">
                {/* {list.content.length} */}
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
                {/* onClick={editList} */}
                <DropdownItem>Delete list</DropdownItem>
                {/* onClick={deleteList} */}
                <DropdownItem divider />

                <DropdownItem>Show all tasks</DropdownItem>
                {/* onClick={getTasks} */}
                <DropdownItem>Show all checked tasks</DropdownItem>
                {/* onClick={setTaskChecked} */}
                <DropdownItem>Show all unchecked tasks</DropdownItem>
                {/* onClick={setTaskUnchecked} */}
              </DropdownMenu>
            </Dropdown>
          </CardTitle>

          <CardBody className="card-body-style">
            <CreateTaskLink />

            {/* Show / hide here */}
            <CreateTask />

            <TasksCatalog tasks={currentTasks} />
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

ListSummary.propTypes = {};

// const mapStateToProps = state => ({
//   tasks:
// })

export default ListSummary;
