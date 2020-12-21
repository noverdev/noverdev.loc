import * as React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AdminRoutes from "../../routes/AdminRoutes";
import SiteRoutes from "../../routes/SiteRoutes";
import NotFoundPage from "./NotFoundPage";

type Props = {}

type State = {}

class RouteList extends React.Component<Props, State> {
    render() {
        return (
            <Router>
                <Switch>
                    {SiteRoutes.map((route, index) => this.renderRoute(route, index))}
                    {AdminRoutes.map((route, index) => this.renderRoute(route, index))}
                    <Route component={NotFoundPage}/>
                </Switch>
            </Router>
        );
    }

    renderRoute(route, index) {
        return (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
            />
        );
    }
}

export default RouteList;