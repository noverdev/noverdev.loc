import * as React from "react";
import {Redirect, Route} from "react-router-dom";

export function AuthAdminRoute(route) {
    const isAuthed = !!localStorage.getItem('ACCESS_TOKEN');
    const message = "Please log in to view this page!";

    return (
        <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
            render={props => (
                isAuthed ? (
                    <route.component {...props} routes={route.routes}/>
                ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: {
                            message,
                            requestedPath: route.path,
                        }
                    }}/>
                )
            )}
        />
    );
}