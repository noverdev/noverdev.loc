import * as React from "react";
import NavBarComponent from "../components/NavBarComponent";
import Routes from "./Routes";

type Props = {}

type State = {}

class MainPage extends React.Component<Props, State> {
    render() {
        return (
            <React.Fragment>
                <NavBarComponent/>
                <Routes/>
            </React.Fragment>
        );
    }
}

export default MainPage;