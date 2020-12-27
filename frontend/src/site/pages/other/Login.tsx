import Button from "@material-ui/core/Button";
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
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/admin"/>
        }
        return (
            <React.Fragment>
                <h1>Login Page</h1>
                <Button variant="contained" color="primary" onClick={() => this.onLogin()}>
                    Login
                </Button>
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