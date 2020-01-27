import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import ListsShow from "./components/ListsShow";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/user"} component={ListsShow} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
