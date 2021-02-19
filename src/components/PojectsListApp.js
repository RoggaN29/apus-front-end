import React, { useContext } from 'react';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { AuthContext } from './auth/AuthContext';
import { ProjectCard } from './shared/ProjectCard';
import { types } from './types/types';
import { useFetchProjects } from '../hooks/useFetchProjects';

export const PojectsListApp = () => {

    const {user, dispatch} = useContext(AuthContext);
    const history = useHistory();
    
    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );
    
    const [ formValues, handleInputChange ] = useForm({ searchText: q });

    const { searchText } = formValues;
    
    const { projectsFiltered, loading } = useFetchProjects( q );
    // const projectsFiltered = useMemo(() => getProjectsByName( q ), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }

    const handleLogout = () => {
        dispatch({
            type: types.authLogout
        })
        history.replace('/login')
    }

    const handleNewProject = () => {
        history.push('new-project')
    }

    return (
        <div>
            <div className="navbar-wrapper">
                <form onSubmit={ handleSearch }>
                    <input className="search" type="text" name="searchText" value={ searchText } onChange={ handleInputChange } placeholder="Search project" autoComplete="off"/>
                    <button className="search" type="submit">Search</button>
                </form>
                <span>{user.username}</span>
                <button className="button" onClick={ handleLogout }>Logout</button>
            </div>
            <button className="button" onClick={ handleNewProject }>New project</button>
            { loading && 'Loading' }
            { projectsFiltered.length === 0 &&
                <div className="alert danger">
                    <p>No match project</p>
                </div>
            }
            <div className="cards-wrapper">
            { projectsFiltered.map((project) => {
                return <ProjectCard project={project} history={history} key={project._id}/>
                })
            }
            </div>
        </div>
    )
}