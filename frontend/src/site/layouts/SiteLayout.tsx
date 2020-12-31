import * as React from "react";

class SiteLayout extends React.Component {
    render() {
        return (
            <React.Fragment>
                Site Layout
                {this.props.children}
            </React.Fragment>
        );
    }
}

export default SiteLayout;