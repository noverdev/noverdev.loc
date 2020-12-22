import * as React from "react";

type Props = {}

type State = {}

class DefaultLayout extends React.Component<Props, State> {
    constructor(props) {
        super(props);
    }

    render() {
        let {children} = this.props;
        return (
            <React.Fragment>
                {DefaultLayout}
                {children}
            </React.Fragment>
        );
    }
}

export default DefaultLayout;