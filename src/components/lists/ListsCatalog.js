import React from "react";
import { CardColumns, Col } from "reactstrap";

import ListSummary from "./ListSummary";
import CreateList from "./CreateList";

const ListsCatalog = ({ lists, tasks }) => {
  console.log("LISTS here: ", lists);
  const createListForm = lists.length < 3 ? <CreateList /> : null;
  const createListsCatalog = lists.length ? (
    lists &&
    lists.map(list => {
      return <ListSummary key={list._id} list={list} tasks={tasks} />;
    })
  ) : (
    <Col style={{ color: "#fff" }}>No lists yet...</Col>
  );

  return (
    <div>
      <CardColumns>
        {createListForm}
        {createListsCatalog}

        {/* {lists &&
          lists.map(list => {
            return <ListSummary key={list._id} list={list} tasks={tasks} />;
          })} */}
      </CardColumns>
    </div>
  );
};

export default ListsCatalog;
