import * as React from "react";

type Props = {}

type State = {}

class DashboardPage extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <span>Dashboard Page</span>
            </React.Fragment>
        );
    }
}

export default DashboardPage;