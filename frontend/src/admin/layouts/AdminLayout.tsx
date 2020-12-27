import * as React from "react";

class AdminLayout extends React.Component {
    render() {
        return (
            <React.Fragment>
                Admin Layout
                {this.props.children}
            </React.Fragment>
        )
    }
}

export default AdminLayout;