import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AboutPage from "./views/AboutPage";
import TaskDetailPage from "./views/TaskDetailPage";
import TaskEditPage from "./views/TaskEditPage";
import TaskListPage from "./views/TaskListPage";

export default function App(props) {
  console.log('object :>> ');
  return (
    <Router>
      <Switch>
        <Route path="/about-us" exact={true}>
          <AboutPage />
        </Route>

        <Route path="/detail" exact={true}>
          <TaskDetailPage />
        </Route>

        <Route path="/edit/:id" exact={true}>
          <TaskEditPage />
        </Route>

        <Route path="/" exact={true}>
          <TaskListPage />
        </Route>
      </Switch>
    </Router>
  );
}