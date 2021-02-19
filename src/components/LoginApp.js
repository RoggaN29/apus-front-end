import React, { useContext, useState } from 'react';
import { postLogin } from '../helpers/postLogin';
import { useForm } from '../hooks/useForm';
import { AuthContext } from './auth/AuthContext';
import { types } from './types/types';

export const LoginApp = ({history}) => {

    const { dispatch } = useContext(AuthContext);
    const [errorLogin, setErrorLogin] = useState(false);

    const initialForm = {
        username: '',
        password: ''
    }
    const [ formLoginValues, handleLoginInputChange ] = useForm( initialForm );
    const { username } = formLoginValues;

    const handleLogin = async(e) => {
        e.preventDefault();
        const lastPath = localStorage.getItem('lastPath' || '/projects');
        const status = await postLogin(formLoginValues).then( (res) => {
            return res.status;
        })
        if(status === 'authenticated'){
            dispatch({
                type: types.authLogin,
                payload: {
                    username: username
                }
            })
            history.replace(lastPath);
        } else {
            setErrorLogin(true)
        }
    }

    return (
        <div className="login-wrapper animate__animated animate__fadeIn">
            <div className="login-card">
                <form onSubmit={ handleLogin }>
                    <img className="user-icon" src="../assets/user-icon.png" alt="user-icon" />                  
                    <div className="input-wrapper">
                        <label>Username</label>
                        <input type="text" name="username" onChange={ handleLoginInputChange } placeholder="username" autoComplete="off"/>
                    </div>
                    <div className="input-wrapper">
                        <label>Password</label>
                        <input type="password" name="password" onChange={ handleLoginInputChange } placeholder="password" autoComplete="off"/>
                    </div>
                    { errorLogin && ( <p className="alert danger">Error en login, favor de revisar sus credenciales.</p> ) }
                    <button type="submit" className="login">Sing in</button>
                    <a href="/login" className="link">Forgot password?</a>
                </form>
            </div>
        </div>
    )
}