import {Route, Switch,Redirect, Link} from 'react-router-dom';
import * as React from "react";
import Users from "./Users";

type Props = {
}

type State = {
}

class Test extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className={"navbar-brand"} to={"/"}> Symfony React Project </Link>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className={"nav-link"} to={"/users"}> Users </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Redirect exact from="/" to="/users" />
                    <Route path="/users" component={Users} />
                </Switch>
            </div>
        )
    }
}

export default Test;