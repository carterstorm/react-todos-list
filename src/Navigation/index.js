import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Author } from "../features/author/Author";
import { TaskPage } from "../features/tasks/TaskPage";
import { TasksPage } from "../features/tasks/TasksPage";
import { toAuthor, toTask, toTasks } from "../routes";
import { Item, List, StyledNavLink } from "./styled";

export const Navigation = () => (
    <nav>
        <List>
            <Item>
                <StyledNavLink activeClassName="active" to={toTasks()}>
                    Tasks
                </StyledNavLink>
            </Item>
            <Item>
                <StyledNavLink activeClassName="active" to={toAuthor()}>
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
                <Author />
            </Route>

            <Route path="/">
                <Redirect to={toTasks()} />
            </Route>
        </Switch>
    </nav >
);