import React from 'react';
import { postCreateProject } from '../helpers/postCreateProject';
import { useForm } from '../hooks/useForm';

export const ProjectsUploadApp = ({history}) => {

    const initialForm = {
        name: '',
        description: '',
        scope: '',
        modelSupport: '',
        specialInstructions: '',
        complexity: '',
        department: '',
        tags: '',
        projectLead: '',
        projectLeadEmail : '',
        "status": "new"
    }
    const [ formLoginValues, handleLoginInputChange ] = useForm( initialForm );

    const handleBack = () => {
        history.push('/projects')
    }

    const handleNewProject = async(e) => {
        e.preventDefault();
        console.log('submit form', formLoginValues)
        await postCreateProject(formLoginValues);
        history.replace('/projects');
    }

    return (
        <form onSubmit={handleNewProject}>
            <div className="form-wrapper">
                <div className="input-wrapper">
                    <label>Project name:</label>
                    <input type="text" name="name" onChange={ handleLoginInputChange } placeholder="Enter project name" autoComplete="off"/>
                </div>

                <div className="input-wrapper">
                    <label>Complexity:</label>
                    <select name="complexity" onChange={ handleLoginInputChange } >
                        <option>Simple</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </div>

                <div className="input-wrapper">
                    <label>Project description:</label>
                    <textarea name="description" onChange={ handleLoginInputChange } placeholder="Enter project name" autoComplete="off"></textarea>
                </div>

                <div className="input-wrapper">
                    <label>Project scope:</label>
                    <textarea name="scope" onChange={ handleLoginInputChange } placeholder="Enter project name" autoComplete="off"></textarea>
                </div>

                <div className="input-wrapper">
                    <label>Support model:</label>
                    <textarea name="modelSupport" onChange={ handleLoginInputChange } placeholder="Enter project name" autoComplete="off"></textarea>
                </div>

                <div className="input-wrapper">
                    <label>Special Instructions:</label>
                    <textarea name="specialInstructions" onChange={ handleLoginInputChange } placeholder="Enter project name" autoComplete="off"></textarea>
                </div>

                <div className="input-wrapper">
                    <label>Departament:</label>
                    <input type="text" name="department" onChange={ handleLoginInputChange } placeholder="Enter departament" autoComplete="off" />
                </div>

                <div className="input-wrapper">
                    <label>Tags:</label>
                    <input type="text" name="tags" onChange={ handleLoginInputChange } placeholder="Enter tags" autoComplete="off" />
                </div>

                <div className="input-wrapper">
                    <label>Project lead:</label>
                    <input type="text" name="projectLead" onChange={ handleLoginInputChange } placeholder="Enter project lead" autoComplete="off" />
                </div>

                <div className="input-wrapper">
                    <label>E-mail lead:</label>
                    <input type="text" name="projectLeadEmail" onChange={ handleLoginInputChange } placeholder="Enter e-mail lead" autoComplete="off" />
                </div>

                <div className="buttons-wrapper">
                    <button className="button" onClick={ handleBack }>Cancel</button>
                    <button className="submit">Create project</button>
                </div>
            </div>
        </form>
    )
}