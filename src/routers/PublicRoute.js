import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRoute = ({
    isAthtenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route { ...rest }
            component={ (props) => (
                (!isAthtenticated) 
                ? ( <Component { ...props } /> )
                : ( <Redirect to="/proyects" /> ) 
            )}
        />
    )
}

PublicRoute.propTypes = {
    isAthtenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
