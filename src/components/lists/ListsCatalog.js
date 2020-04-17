import React from "react";
import { CardColumns, Col } from "reactstrap";

import ListSummary from "./ListSummary";
import CreateList from "./CreateList";

const ListsCatalog = ({ lists, tasks }) => {
  const createListForm = lists.length < 3 ? <CreateList /> : null;
  const createListsCatalog = lists.length ? (
    lists &&
    lists.map((list) => {
      return <ListSummary key={list._id} list={list} tasks={tasks} />;
    })
  ) : (
    <Col>
      <p>No lists yet...</p>
      <p>Please, click on a "New list" button to create a new list</p>
    </Col>
  );

  return (
    <CardColumns>
      {createListForm}
      {createListsCatalog}
    </CardColumns>
  );
};

export default ListsCatalog;
