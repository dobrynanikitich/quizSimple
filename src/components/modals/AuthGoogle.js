import React from 'react';
import GoogleAuth from '../googleAuth/GoogleAuth';

import classes from './AuthGoogle.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(classes);

const authGoogle = ({ changeState, isLogin }) => {
    const classNames = cx({
        AuthGoogle: true,
    })

    return (
        <div className={classes.AuthGoogleWrapper}>
            <h2>Please log in to continue playing</h2>
            <GoogleAuth 
                changeState={changeState}
                isLogin={isLogin}
            />
        </div>
    )
}

export default authGoogle;