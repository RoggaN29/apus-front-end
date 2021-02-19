import React from 'react';
import {
    Switch,
    Route,
    Redirect } from "react-router-dom";
import { PojectsListApp } from '../components/PojectsListApp';
import { ProjectDetailsApp } from '../components/ProjectDetailApp';
import { ProjectsUploadApp } from '../components/ProjectsUploadApp';

export const DashboardRoutes = () => {

    return (
        <div className="bg-template">
            <div className="main--wrapper">
                <div>
                    <Switch>
                        <Route exact path="/projects" component={ PojectsListApp } />
                        <Route exact path="/new-project" component={ ProjectsUploadApp } />
                        <Route exact path="/project/:projectId" component={ ProjectDetailsApp } />
                        <Redirect to='/projects' />
                    </Switch>
                </div>
            </div>
        </div>
    )
}