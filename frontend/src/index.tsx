import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//mainComponents
import MainPage from "./pages/MainPage";
import Routes from "./pages/Routes";

render(
    <Router>
        <MainPage/>
        <Routes/>
    </Router>,
    document.getElementById("app")
);