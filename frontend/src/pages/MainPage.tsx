import * as React from "react";
import {Route, Switch} from "react-router-dom";
import SiteIndexPage from "./site/SiteIndexPage";
import AdminIndexPage from "./admin/AdminIndexPage";

type Props = {}

type State = {}

class MainPage extends React.Component<Props, State> {
    render() {
        return (
            <Switch>
                <Route exact path="/"><SiteIndexPage/></Route>
                <Route exact path="/admin"><AdminIndexPage/></Route>
            </Switch>
        );
    }
}

export default MainPage;