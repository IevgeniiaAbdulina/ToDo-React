import React from "react";

import ListSummary from "./ListSummary";
import { CardColumns } from "reactstrap";
import CreateList from "./CreateList";

const ListsCatalog = () => {
  return (
    <div>
      <CardColumns>
        {/* Show / hide */}
        <CreateList />

        {/* lists.map() */}
        <ListSummary />
      </CardColumns>
    </div>
  );
};

export default ListsCatalog;
