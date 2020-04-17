import React from "react";
import { Redirect } from "react-router-dom";

const ListDetails = () => {
  const token = localStorage.getItem("token");
  if (!token) return <Redirect to="/signin" />;
  return (
    <div>
      <div>List details here</div>
    </div>
  );
};

export default ListDetails;
