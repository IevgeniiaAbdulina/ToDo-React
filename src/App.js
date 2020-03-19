import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Axios from "./Axios";
// import Header from "./components/Header";
import Home from "./components/Home";
import ListsShow from "./components/ListsShow";
import LoginPage from "./components/LoginPage";

class App extends React.Component {
  // onLoginRequested() {
  //   console.log("Login button has been clicked = App");
  // }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Axios />
          {/* <Axios onLoginRequested={this.onLoginRequested} /> */}
          {/* <Header onLoginRequested={this.onLoginRequested} /> */}

          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/login"} component={LoginPage} />
            <Route exact path={"/user"} component={ListsShow} />
            <Route exact path="*" component={() => "404 PAGE NOT FOUND"} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
