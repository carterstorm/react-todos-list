import React from "react";
import { HashRouter } from "react-router-dom";
import { Navigation } from "./features/Navigation/index.js";

export const App = () => (
    <HashRouter>
        <Navigation />
    </HashRouter>
);