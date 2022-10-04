import React from "react";
import { HashRouter, Link, Switch, Route } from "react-router-dom";
import Tasks from "../src/features/Tasks";

export default () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/tasks">Tasks</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/tasks" >
                    <Tasks />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);