import * as React from 'react';

interface Props {
    className?: string;
}

interface State {
}

class PageTitle extends React.Component<Props, State> {
    render() {
        let defaultClasses = "text-gray-700 text-3xl font-medium";
        if(this.props.className) {
            defaultClasses = this.props.className;
        }
        return <h3 className={defaultClasses}>{this.props.children}</h3>;
    }
}

export default PageTitle;
