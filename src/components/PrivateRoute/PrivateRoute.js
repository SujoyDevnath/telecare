import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    // This is private route
    const { allContext } = useAuth();
    const { user, isLoading } = allContext;
    if (isLoading) {
        return <Spinner animation="grow" variant="primary" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user?.email ?
                children :
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute;