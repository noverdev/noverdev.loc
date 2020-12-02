import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//mainComponents
import MainPage from "./pages/MainPage";

//styles
import 'bootstrap';

import "../../public/build/app.css";

ReactDOM.render(
    <Router>
        <MainPage/>
    </Router>,
    document.getElementById("app")
);