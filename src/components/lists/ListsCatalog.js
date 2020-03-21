import React from "react";

import ListSummary from "./ListSummary";
import TasksCatalog from "../tasks/TasksCatalog";
import CreateTaskLink from "../tasks/CreateTaskLink";

const ListsCatalog = () => {
  return (
    <div>
      <ListSummary />

      <CreateTaskLink />

      <TasksCatalog />
    </div>
  );
};

export default ListsCatalog;
