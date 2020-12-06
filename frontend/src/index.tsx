import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./pages/MainPage";

render(
    <Router>
        <MainPage/>
    </Router>,
    document.getElementById("app")
);