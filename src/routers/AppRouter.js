import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route} from "react-router-dom";  
import { LoginApp } from '../components/LoginApp';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LoginApp} />
                </Switch>
            </div>
        </Router>
    );
}
