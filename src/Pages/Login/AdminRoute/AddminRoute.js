import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../Context/UseAuth';


const AddminRoute = ({ children, ...rest }) => {
    const { user, isloading, admin } = UseAuth()
    if (isloading) {
        return <p className='text-center font-bold text-3xl p-5 my-5'> loading... </p>
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />

    );
};

export default AddminRoute;