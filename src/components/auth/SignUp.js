import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <div>
        <h5>Sign Up MODAL</h5>

        <form>
          <div>
            <label>Name</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Last Name</label>
            <input type="text"></input>
          </div>
          <button>OK</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
