import React from "react";

import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import ListsShow from "./components/ListsShow";
import LoginPage from "./components/LoginPage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/login"} component={LoginPage} />
          <Route exact path={"/user"} component={ListsShow} />
          <Route exact path="*" component={() => "404 PAGE NOT FOUND"} />
        </Switch>
      </div>
    );
  }
}

export default App;
