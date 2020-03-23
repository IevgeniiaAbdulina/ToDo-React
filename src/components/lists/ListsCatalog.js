import React from "react";
import { CardColumns } from "reactstrap";

import ListSummary from "./ListSummary";
// import CreateList from "./CreateList";

const ListsCatalog = ({ lists }) => {
  return (
    <div>
      <CardColumns>
        {/* Show / hide */}
        {/* <CreateList /> */}

        {lists &&
          lists.map(list => {
            return <ListSummary list={list} key={list._id} />;
          })}
      </CardColumns>
    </div>
  );
};

export default ListsCatalog;
