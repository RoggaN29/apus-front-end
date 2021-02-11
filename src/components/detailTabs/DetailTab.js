import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { getProjectById } from '../../helpers/getProjectById';

export const DetailTab = ({projectId}) => {

    const project = getProjectById( projectId );
    const [projectValues, setProjectValues] = useState(project);

    if ( !project ) {
        return <Redirect to="/" />;
    }

    const { name, description, scope, model, instructions, complexity, departament, tags, lead, email } = projectValues;

    const changeValue = (e) => {
        console.log(e.target.value)
        //setProjectValues(e.target.value)
    }

    return (
        <div className="animate__animated animate__fadeIn">

            <h1>Project detail</h1>
        
            <div className="input-wrapper">
                <label>Project name:</label>
                <input placeholder="Enter project name" value={name} onChange={ changeValue }/>
            </div>

            <div className="input-wrapper">
                <label>Project description:</label>
                <textarea value={description} onChange={ changeValue }></textarea>
            </div>

            <div className="input-wrapper">
                <label>Project scope:</label>
                <textarea value={scope} onChange={ changeValue }></textarea>
            </div>

            <div className="input-wrapper">
                <label>Support model:</label>
                <textarea value={model} onChange={ changeValue }></textarea>
            </div>

            <div className="input-wrapper">
                <label>Special Instructions:</label>
                <textarea value={instructions} onChange={ changeValue }></textarea>
            </div>

            <div className="input-wrapper">
                <label>Complexity:</label>
                <select value={complexity} onChange={ changeValue }>
                    <option>Simple</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </div>

            <div className="input-wrapper">
                <label>Departament:</label>
                <input placeholder="Enter departament" value={departament} onChange={ changeValue }/>
            </div>

            <div className="input-wrapper">
                <label>Tags:</label>
                <input placeholder="Enter tags" value={tags} onChange={ changeValue }/>
            </div>

            <div className="input-wrapper">
                <label>Project lead:</label>
                <input placeholder="Enter project lead" value={lead} onChange={ changeValue }/>
            </div>

            <div className="input-wrapper">
                <label>E-mail lead:</label>
                <input placeholder="Enter e-mail lead" value={email} onChange={ changeValue }/>
            </div>
        </div>
    )
}