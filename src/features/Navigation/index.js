import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Author } from "../author/Author";
import { TaskPage } from "../tasks/TaskPage";
import { TasksPage } from "../tasks/TasksPage";
import { Item, List, StyledNavLink } from "./styled";

export const Navigation = () => (
    <nav>
        <List>
            <Item>
                <StyledNavLink activeClassName="active" to="/tasks">
                    Tasks
                </StyledNavLink>
            </Item>
            <Item>
                <StyledNavLink activeClassName="active" to="/about">
                    About author
                </StyledNavLink>
            </Item>
        </List>

        <Switch>
            <Route path="/tasks/:id">
                <TaskPage />
            </Route>
            <Route path="/tasks">
                <TasksPage />
            </Route>

            <Route path="/about">
                <Author />
            </Route>

            <Route path="/">
                <Redirect to="/tasks" />
            </Route>
        </Switch>
    </nav>
);