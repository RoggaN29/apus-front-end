import React from 'react';
import {
    Switch,
    Route,
    Redirect } from "react-router-dom";
import { UploadProjectsApp } from '../components/UploadProjectsApp';

export const DashboardRoutes = ({history}) => {

    const handleLogout = () => {
        history.goBack();
    }


    return (
        <>
            <div className="navbar-wrapper">
                <button className="button" onClick={ handleLogout }>Logout</button>
            </div>
            <div>
                <Switch>
                    <Route exact path="/proyects" component={ UploadProjectsApp } />
                    <Route exact path="/proyect/:proyectId" component={ UploadProjectsApp } />
                    <Redirect to='/proyects' />
                </Switch>
            </div>
        </>
    )
}