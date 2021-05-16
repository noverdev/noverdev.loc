import * as React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SiteRoutes from "../site/routes/SiteRoutes";
import SiteLayout from "../site/layouts/SiteLayout";
import {AdminLayout} from "../admin/layouts/AdminLayout";
import Login from "../site/pages/other/Login";
import {RouteCreatePage} from "../admin/pages/creator/RouteCreatePage";

export const RouteList: React.FC = () => {
    const renderSiteRoute = (route, index) => <Route key={index} {...route}/>;

    return (
        <Router>
            <Switch>
                <Route path='/login' component={Login}/>

                <Route path={'/admin/:path?'} exact>
                    <AdminLayout>
                        <Switch>
                            {/*{AdminRoutes.map((route, index) => renderAdminRoute(route, index))}*/}
                            <Route path={'/admin/create-route'} component={RouteCreatePage}/>
                        </Switch>
                    </AdminLayout>
                </Route>

                <Route path={'/:path?'}>
                    <SiteLayout>
                        <Switch>
                            {SiteRoutes.map((route, index) => renderSiteRoute(route, index))}
                        </Switch>
                    </SiteLayout>
                </Route>
            </Switch>
        </Router>
    );
}