import * as React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import SiteIndexPage from "./site/SiteIndexPage";
import AdminIndexPage from "./admin/AdminIndexPage";

type Props = {}

type State = {}

class Routes extends React.Component<Props, State> {
    render() {
        return (
            <Switch>
                <Redirect exact from="/" to="/" />
                <Route path="/" component={SiteIndexPage}/>
                <Route path="/admin" component={AdminIndexPage}/>
            </Switch>
        );
    }
}

export default Routes;