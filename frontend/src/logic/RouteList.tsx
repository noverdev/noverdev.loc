import * as React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SiteRoutes from "../site/routes/SiteRoutes";
import AdminRoutes from "../admin/routes/AdminRoutes";

type Props = {}

type State = {}

class RouteList extends React.Component<Props, State> {
    render() {
        return (
            <Router>
                <Switch>
                    {SiteRoutes.map((route, index) => this.renderRoute(route, index))}
                    {AdminRoutes.map((route, index) => this.renderRoute(route, index))}
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
                component={(props => {
                    return (
                        <route.layout {...props}>
                            <route.component {...props} />
                        </route.layout>
                    );
                })}
            />
        );
    }
}

export default RouteList;