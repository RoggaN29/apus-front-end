import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({
    isAthtenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastPath', rest.location.pathname)
    
    return (
        <Route { ...rest }
            component={ (props) => (
                (isAthtenticated) 
                ? ( <Component { ...props } /> )
                : ( <Redirect to="/login" /> ) 
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAthtenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
