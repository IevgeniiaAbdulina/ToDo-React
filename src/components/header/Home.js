import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  isAuthenticated() {}

  render() {
    return (
      <div>
        <h1>
          You are not logged in. You must log in to view the page at /user
        </h1>
      </div>
    );
  }
}

export default Home;
