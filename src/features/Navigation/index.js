import React from "react";
import { Route, Switch } from "react-router-dom";
import { Author } from "../author/Author";
import { TasksPage } from "../tasks/TasksPage";
import { Item, List, StyledNavLink } from "./styled";

export const Navigation = () => (
    <nav>
        <List>
            <Item>
                <StyledNavLink to="/tasks">
                    Tasks
                </StyledNavLink>
            </Item>
            <Item>
                <StyledNavLink to="/about">
                    About author
                </StyledNavLink>
            </Item>
        </List>

        <Switch>
            <Route path="/tasks">
                <TasksPage />
            </Route>

            <Route path="/about">
                <Author />
            </Route>
        </Switch>
    </nav>
);