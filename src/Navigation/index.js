import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthorPage } from "../features/Author/Author";
import { TaskPage } from "../features/tasks/TaskPage";
import { TasksPage } from "../features/tasks/TasksPage";
import { toAuthor, toTask, toTasks } from "../routes";
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
                <StyledNavLink activeClassName="active" to="/author">
                    About author
                </StyledNavLink>
            </Item>
        </List>

        <Switch>
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route path={toTasks()}>
                <TasksPage />
            </Route>

            <Route path={toAuthor()}>
                <AuthorPage />
            </Route>

            <Route path="/">
                <Redirect to="/tasks" />
            </Route>
        </Switch>
    </nav >
);