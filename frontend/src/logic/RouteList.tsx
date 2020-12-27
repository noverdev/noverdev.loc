import * as React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SiteRoutes from "../site/routes/SiteRoutes";
import AdminRoutes from "../admin/routes/AdminRoutes";
import SiteLayout from "../site/layouts/SiteLayout";
import AdminLayout from "../admin/layouts/AdminLayout";
import AuthRoute from "./AuthRoute";
import Login from "../site/pages/other/Login";

type Props = {}

type State = {}

class RouteList extends React.Component<Props, State> {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/login' component={Login}/>

                    <Route path={'/admin/:path?'} exact>
                        <AdminLayout>
                            <Switch>
                                {AdminRoutes.map((route, index) => this.renderAdminRoute(route, index))}
                            </Switch>
                        </AdminLayout>
                    </Route>

                    <Route path={'/:path?'}>
                        <SiteLayout>
                            <Switch>
                                {SiteRoutes.map((route, index) => this.renderSiteRoute(route, index))}
                            </Switch>
                        </SiteLayout>
                    </Route>
                </Switch>
            </Router>
        );
    }

    renderSiteRoute(route, index) {
        return (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
            />
        );
    }

    renderAdminRoute(route, index) {
        return (
            <AuthRoute
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
            />
        );
    }
}

export default RouteList;