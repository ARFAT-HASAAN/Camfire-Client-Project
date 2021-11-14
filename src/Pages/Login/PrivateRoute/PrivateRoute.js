import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../Context/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isloading } = UseAuth()
    if (isloading) {
        return <p className='text-center font-bold text-3xl p-5 my-5'> loading... </p>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />

    );
};

export default PrivateRoute;