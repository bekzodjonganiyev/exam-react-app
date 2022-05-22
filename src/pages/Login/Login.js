
import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import useContext from '../../hook/useContext'

import YouTubeLogo from "../../assets/Images/you-tube-logo.png"


import './login.css';

const Login = () => {
    const [token, setToken] = useContext();

    const elName = useRef()
    const elNumber = useRef()

    const handleSubmit = (evt) => {
        evt.preventDefault();

        setToken({
            name: elName.current.value,
            username: elNumber.current.value,
        });

        window.localStorage.setItem('token', JSON.stringify(token));
    };

    return (
        <form className='form' onSubmit={handleSubmit}>

            <img src={YouTubeLogo}  alt="youtube logo" width="200" height="auto"/>

            <h1 className='lg-page-title'>Log in to YouTube</h1>

            <div>
                <input
                    ref={elName}
                    className='input'
                    type='text'
                    placeholder='Name'
                    required
                    autocomplate='off'
                />
            </div>

            <div>
                <input
                    ref={elNumber}
                    className='input'
                    type='number'
                    placeholder='Phone number'
                    required
                    autocomplate='off'
                />
            </div>

            <button type='submit' onClick={handleSubmit} className="btn">Log In</button>

            <div className='lg-page-footer'>
                <NavLink to='#' className='lg-page-link'>
                    Forgot password?
                </NavLink>
                <NavLink to='#' className='lg-page-link'>
                    Sign up to YouTube
                </NavLink>
            </div>
        </form>
    );
};

export default Login;
