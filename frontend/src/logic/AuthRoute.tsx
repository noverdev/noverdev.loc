import * as React from "react";
import {Redirect, Route, RouteComponentProps} from "react-router-dom";

type Props = {
    component: React.FC<RouteComponentProps>;
    path: string;
    exact?: boolean;
}

type State = {
    isAuthed: boolean;
    message: string;
}

class AuthRoute extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            isAuthed: !!localStorage.getItem('ACCESS_TOKEN'),
            message: "Please log in to view this page!",
        }
    }


    render() {
        let {exact, path, component: Component} = this.props;
        let {isAuthed, message} = this.state;
        return (
            <Route exact={exact} path={path} render={(props) =>
                isAuthed ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: {
                            message,
                            requestedPath: path,
                        }
                    }}/>
                )
            } />
        );
    }
}

export default AuthRoute;