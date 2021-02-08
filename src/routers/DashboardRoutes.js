import React from 'react';
import {
    Switch,
    Route,
    Redirect } from "react-router-dom";
import { DetailProjectApp } from '../components/DetailProjectApp';
import { UploadProjectsApp } from '../components/UploadProjectsApp';

export const DashboardRoutes = ({history}) => {

    const handleLogout = () => {
        history.push('/login')
    }

    return (
        <>
            <div className="navbar-wrapper">
                <button className="button" onClick={ handleLogout }>Logout</button>
            </div>
            <div>
                <Switch>
                    <Route exact path="/projects" component={ UploadProjectsApp } />
                    <Route exact path="/project/:projectId" component={ DetailProjectApp } />
                    <Redirect to='/projects' />
                </Switch>
            </div>
        </>
    )
}