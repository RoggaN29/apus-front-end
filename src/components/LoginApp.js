import React from 'react';

export const LoginApp = ({history}) => {

    const handleLogin = (e) => {
        e.preventDefault();
        history.push('/projects')
    }

    return (
        <div className="login-wrapper animate__animated animate__fadeIn">
            <div className="login-card">
                <form>
                    <img className="user-icon" src="../assets/user-icon.png" alt="user-icon" />                  
                    <div className="input-wrapper">
                        <label>Email</label>
                        <input />
                    </div>
                    <div className="input-wrapper">
                        <label>Password</label>
                        <input />
                    </div>
                    <button className="login" onClick={ handleLogin }>Sing in</button>
                    <a href="/login" className="link">Forgot password?</a>
                </form>
            </div>
        </div>
    )
}