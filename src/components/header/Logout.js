import React from "react";
import { Link } from "react-router-dom";

class Logout extends React.Component {
  state = {
    _id: ""
  };

  render() {
    return (
      <div>
        <div>You have been logged out!</div>
        <Link to="/">Login Again</Link>
      </div>
    );
  }
}

export default Logout;
