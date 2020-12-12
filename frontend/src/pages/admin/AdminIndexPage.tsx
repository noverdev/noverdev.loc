import * as React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "../../components/admin/Header";
import SidebarMenu from "../../components/admin/SidebarMenu";
import DashboardPage from "./DashboardPage";
import UsersPage from "./UsersPage";
import PermissionsPage from "./PermissionsPage";
import NotFoundPage from "./NotFoundPage";
import SiteIndexPage from "../site/SiteIndexPage";

type Props = {}

type State = {}

class AdminIndexPage extends React.Component<Props, State> {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <div className="flex flex-col md:flex-row">
                    <SidebarMenu/>
                    <Switch>
                        <Route exact path="/"><SiteIndexPage/></Route>
                        <Route exact path="/admin"><DashboardPage/></Route>
                        <Route exact path="/admin/users"><UsersPage/></Route>
                        <Route exact path="/admin/permissions"><PermissionsPage/></Route>

                        {/*404 Page*/}
                        <Route path="/admin/*"><NotFoundPage/></Route>
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default AdminIndexPage;