import React, { useState } from 'react';
import logo from '../../assets/mainLogo.png';

import GoogleAuth from '../googleAuth/GoogleAuth';
import { Link } from 'react-router-dom';

import classes from './Header.module.scss';
import classNames from 'classnames/bind';

const Header = ({ score, changeState, isLogin }) => {
    return (
        <header className={classes.HeaderApp}>
            <Link to='/'>
                <img
                    className={classes.HeaderLogo}
                    src={logo} 
                    alt='quiz application logo' 
                    onClick={() => {
                        changeState('initialState');
                        changeState('isLogin', isLogin);
                    }}/>
            </Link>
            <div className={classes.HeaderTitle}>
                <div className={classes.CurrentScore}>
                    <span>Your score: {score}</span>
                </div>
            </div>
            <GoogleAuth 
                changeState={changeState}
                isLogin={isLogin}
            />
        </header>
    )
}

export default Header;