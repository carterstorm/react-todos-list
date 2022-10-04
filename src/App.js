import React from "react";
import { HashRouter, Link, Switch, Route } from "react-router-dom";
import { TasksPage } from "./features/tasks/TasksPage/index.js";
import { Author } from "./features/author/Author";

export const App = () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/tasks">Tasks</Link>
                </li>
                <li>
                    <Link to="/about">About author</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/tasks" >
                    <TasksPage />
                </Route>
                <Route path="/about" >
                    <Author />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);