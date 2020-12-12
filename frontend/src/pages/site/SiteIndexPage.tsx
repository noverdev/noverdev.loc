import * as React from "react";
import {Route, Switch} from "react-router-dom";
import NotFoundPage from "../common/NotFoundPage";
import AdminIndexPage from "../admin/AdminIndexPage";

type Props = {}

type State = {}

class SiteIndexPage extends React.Component<Props, State> {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/">Site Index Page</Route>
                    <Route exact path="/admin"><AdminIndexPage/></Route>

                    {/*404 Page*/}
                    <Route><NotFoundPage/></Route>
                </Switch>
            </React.Fragment>
        );
    }
}

export default SiteIndexPage;