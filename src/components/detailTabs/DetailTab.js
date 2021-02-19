import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export const DetailTab = ({project}) => {

    // console.log('DetailTab', project)
    const [projectValues, setProjectValues] = useState(project);

    if ( !project ) {
        return <Redirect to="/" />;
    }

    const { name, description, scope, modelSupport, specialInstructions, complexity, department, tags, projectLead, projectLeadEmail } = projectValues;

    const changeValue = (e) => {
        console.log(e.target.value)
        setProjectValues(e.target.value)
    }

    return (
        <form>
            <h1>Project detail</h1>
            <div className="form-wrapper">
        
                <div className="input-wrapper">
                    <label>Project name:</label>
                    <input placeholder="Enter project name" name={name} value={name} onChange={ changeValue }/>
                </div>

                <div className="input-wrapper">
                    <label>Complexity:</label>
                    <select name={complexity} value={complexity} onChange={ changeValue }>
                        <option>Simple</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </div>

                <div className="input-wrapper">
                    <label>Project description:</label>
                    <textarea name={description} value={description} onChange={ changeValue }></textarea>
                </div>

                <div className="input-wrapper">
                    <label>Project scope:</label>
                    <textarea name={scope} value={scope} onChange={ changeValue }></textarea>
                </div>

                <div className="input-wrapper">
                    <label>Support model:</label>
                    <textarea name={modelSupport} value={modelSupport} onChange={ changeValue }></textarea>
                </div>

                <div className="input-wrapper">
                    <label>Special Instructions:</label>
                    <textarea name={specialInstructions} value={specialInstructions} onChange={ changeValue }></textarea>
                </div>

                <div className="input-wrapper">
                    <label>Departament:</label>
                    <input placeholder="Enter departament" name={department} value={department} onChange={ changeValue }/>
                </div>

                <div className="input-wrapper">
                    <label>Tags:</label>
                    <input placeholder="Enter tags" name={tags} value={tags} onChange={ changeValue }/>
                </div>

                <div className="input-wrapper">
                    <label>Project lead:</label>
                    <input placeholder="Enter project lead" name={projectLead} value={projectLead} onChange={ changeValue }/>
                </div>

                <div className="input-wrapper">
                    <label>E-mail lead:</label>
                    <input placeholder="Enter e-mail lead" name={projectLeadEmail} value={projectLeadEmail} onChange={ changeValue }/>
                </div>
            </div>
        </form>
    )
}