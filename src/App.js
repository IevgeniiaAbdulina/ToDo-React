import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import NavbarApp from "./components/layout/NavbarApp";
import ListDetails from "./components/lists/ListDetails";
import TaskDetails from "./components/tasks/TaskDetails";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
// import CreateList from "./components/lists/CreateList";
// import CreateTask from "./components/tasks/CreateTask";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavbarApp />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/list/:id" component={ListDetails} />
            <Route path="/task/:id" component={TaskDetails} />
            {/* <Route path="/create/list" component={CreateList} /> */}
            {/* <Route path="/create/task" component={CreateTask} /> */}
            <Route path="*" component={() => "404 PAGE NOT FOUND"} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
