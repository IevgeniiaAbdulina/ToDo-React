import React from "react";

import ListSummary from "./ListSummary";
import { CardColumns } from "reactstrap";

const ListsCatalog = () => {
  return (
    <div>
      <CardColumns>
        {/* lists.map() */}
        <ListSummary />
      </CardColumns>
    </div>
  );
};

export default ListsCatalog;
