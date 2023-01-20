import React from "react";
import { HashRouter } from "react-router-dom";
import { Navigation } from "../src/Navigation/index";

export const App = () => (
    <HashRouter>
        <Navigation />
    </HashRouter>
);