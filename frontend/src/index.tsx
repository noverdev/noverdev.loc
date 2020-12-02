import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//mainComponents
import MainPage from "./pages/MainPage";
import Routes from "./pages/Routes";

//styles
import 'bootstrap';
import "../../assets/styles/global.scss";

ReactDOM.render(
    <Router>
        <MainPage/>
        <Routes/>
    </Router>,
    document.getElementById("app")
);