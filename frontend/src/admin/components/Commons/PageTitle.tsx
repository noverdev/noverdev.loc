import * as React from 'react';

interface Props {
    className?: string;
}

interface State {
}

class PageTitle extends React.Component<Props, State> {
    render() {
        return <h3>{this.props.children}</h3>;
    }
}

export default PageTitle;
