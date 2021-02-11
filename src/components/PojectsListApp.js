import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { ProjectCard } from './shared/ProjectCard';
import queryString from 'query-string';
import { getProjectsByName } from '../helpers/getProjectsByName';

export const PojectsListApp = ({history}) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );
    
    const [ formValues, handleInputChange ] = useForm({ searchText: q });

    const { searchText } = formValues;
    
    const projectsFiltered = useMemo(() => getProjectsByName( q ), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }

    const handleNewProject = () => {
        history.push('new-project')
    }
    
    const handleLogout = () => {
        history.replace('/login')
    }

    return (
        <div>
            <div className="navbar-wrapper">
                <form onSubmit={handleSearch}>
                    <input type="text" name="searchText" value={ searchText } onChange={ handleInputChange } placeholder="Search project" autoComplete="off"/>
                    <button type="submit">Search</button>
                </form>
                <button className="button" onClick={ handleLogout }>Logout</button>
            </div>
            <button className="button" onClick={ handleNewProject }>New project</button>
            { projectsFiltered.length === 0 &&
                <div className="alert danger">
                    <p>No match project with name: <strong>{ q }</strong></p>
                </div>
            }
            <div className="cards-wrapper">
            { projectsFiltered.map((project) => {
                return <ProjectCard project={project} history={history} key={project.id}/> 
                })
            }
            </div>
        </div>
    )
}