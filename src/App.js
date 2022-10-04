import React from "react";
import { HashRouter, Link, Switch, Route } from "react-router-dom";
import { Tasks } from "../src/features/Tasks";
import { Author } from "./features/author/Author";

export const App = () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/tasks">Tasks</Link>
                </li>
                <li>
                    <Link to="/about">About me</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/tasks" >
                    <Tasks />
                </Route>
                <Route path="/about" >
                    <Author />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);