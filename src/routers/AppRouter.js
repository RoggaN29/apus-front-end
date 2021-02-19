import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch } from "react-router-dom";  
import { AuthContext } from '../components/auth/AuthContext';
import { LoginApp } from '../components/LoginApp';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/login" component={ LoginApp } isAthtenticated={ user.logged }/>
                    <PrivateRoute path="/" component={ DashboardRoutes } isAthtenticated={ user.logged }/>
                </Switch>
            </div>
        </Router>
    );
}
