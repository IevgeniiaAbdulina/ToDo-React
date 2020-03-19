import React, { Component } from "react";

class SignIn extends Component {
  render() {
    return (
      <div>
        <h5>Sign In MODAL</h5>

        <form>
          <label>Name</label>
          <input type="text"></input>
          <button>OK</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
