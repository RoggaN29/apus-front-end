import React from 'react';

export const ProjectsUploadApp = ({history}) => {

    const handleBack = () => {
        history.push('/projects')
    }

    return (
        <div className="animate__animated animate__fadeIn">

            <div className="input-wrapper">
                <label>Project name:</label>
                <input placeholder="Enter project name"/>
            </div>

            <div className="input-wrapper">
                <label>Project description:</label>
                <textarea></textarea>
            </div>

            <div className="input-wrapper">
                <label>Project scope:</label>
                <textarea></textarea>
            </div>

            <div className="input-wrapper">
                <label>Support model:</label>
                <textarea></textarea>
            </div>

            <div className="input-wrapper">
                <label>Special Instructions:</label>
                <textarea></textarea>
            </div>

            <div className="input-wrapper">
                <label>Complexity:</label>
                <select>
                    <option>Simple</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </div>

            <div className="input-wrapper">
                <label>Departament:</label>
                <input placeholder="Enter departament"/>
            </div>

            <div className="input-wrapper">
                <label>Tags:</label>
                <input placeholder="Enter tags"/>
            </div>

            <div className="input-wrapper">
                <label>Project lead:</label>
                <input placeholder="Enter project lead"/>
            </div>

            <div className="input-wrapper">
                <label>E-mail lead:</label>
                <input placeholder="Enter e-mail lead"/>
            </div>

            <button className="button" onClick={ handleBack }>Cancel</button>
            <button className="button" onClick={ handleBack }>Create project</button>
        </div>
    )
}