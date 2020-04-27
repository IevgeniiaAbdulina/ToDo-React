import React from "react";
import { Col } from "reactstrap";

import ListSummary from "./ListSummary";

const ListsCatalog = ({ lists, tasks }) => {
  const createListsCatalog = lists.length ? (
    lists &&
    lists.map((list) => {
      return <ListSummary key={list._id} list={list} tasks={tasks} />;
    })
  ) : (
    <Col>
      <h6>No lists yet...</h6>
    </Col>
  );

  return <>{createListsCatalog}</>;
};

export default ListsCatalog;
