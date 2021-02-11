import React from 'react';

export const NavbarApp = ({history}) => {

    const handleLogout = () => {
        history.replace('/login')
    }

    const handleSearch = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className="navbar-wrapper">
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Search project"/>
                <button type="submit"></button>
            </form>
            <button className="button" onClick={ handleLogout }>Logout</button>
        </div>
    )
}