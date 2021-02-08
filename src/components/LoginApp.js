import React from 'react'

export const LoginApp = ({history}) => {

    const handleLogin = (e) => {
        e.preventDefault();
        history.push('/projects')
    }

    return (
        <div className="animate__animated animate__fadeIn">
            <h1>Login</h1>
            <hr/>
            <form>
                <label>Correo electrónico</label>
                <input />
                <label>Contraseña</label>
                <input />
                <button className="button" onClick={ handleLogin }>Login</button>
            </form>
        </div>
    )
}