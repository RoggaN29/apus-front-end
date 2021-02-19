import React, { useContext, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { getProjectsByName } from '../../helpers/getProjectsByName';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

export const NavbarApp = ( {filterProjects} ) => {

    const {user, dispatch} = useContext(AuthContext);

    const history = useHistory();
    const location = useLocation();

    const { q = '' } = queryString.parse( location.search );
    
    const [ formValues, handleInputChange ] = useForm({ searchText: q });

    const { searchText } = formValues;
    
    const projectsFiltered = useMemo(() => getProjectsByName( q ), [q]);

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

    return (
        <div className="navbar-wrapper">
            <form onSubmit={ handleSearch }>
                <input className="search" type="text" name="searchText" value={ searchText } onChange={ handleInputChange } placeholder="Search project" autoComplete="off"/>
                <button className="search" type="submit">Search</button>
            </form>
            <span>{user.username}</span>
            <button className="button" onClick={ handleLogout }>Logout</button>
        </div>
    )
}