import React from "react";
import { CardColumns } from "reactstrap";

import ListSummary from "./ListSummary";
// import CreateList from "./CreateList";

const ListsCatalog = ({ lists, tasks }) => {
  return (
    <div>
      <CardColumns>
        {/* Show / hide */}
        {/* <CreateList /> */}

        {lists &&
          lists.map(list => {
            return <ListSummary key={list._id} list={list} tasks={tasks} />;
          })}
      </CardColumns>
    </div>
  );
};

export default ListsCatalog;
