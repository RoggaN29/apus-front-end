import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route} from "react-router-dom";  
import { LoginApp } from '../components/LoginApp';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={ LoginApp } />
                    <Route path="/" component={ DashboardRoutes } />
                </Switch>
            </div>
        </Router>
    );
}
