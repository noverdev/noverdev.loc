import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Test from "./components/Test";

ReactDOM.render(
    <Router>
        <Test/>
    </Router>,
    document.getElementById('app')
);