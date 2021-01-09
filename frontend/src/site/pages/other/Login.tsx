import * as React from "react";
import {Redirect} from "react-router-dom";

type Props = {}

type State = {
    redirect: boolean;
}

class Login extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/admin"/>;
        }
        return (
            <React.Fragment>
                <h1>Login Page</h1>
                <button
                    className="p-2 bg-green-500 rounded text-white border border-green-500 hover:text-green-500 hover:bg-white"
                    onClick={() => this.onLogin()}
                >
                    Login
                </button>
            </React.Fragment>
        );
    }

    onLogin() {
        let token = Math.random().toString(36).substr(2);
        this.setState({
            redirect: true,
        }, () => localStorage.setItem('ACCESS_TOKEN', token));
    }
}

export default Login;