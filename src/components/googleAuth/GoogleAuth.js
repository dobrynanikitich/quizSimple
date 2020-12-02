import React, { useState, useEffect } from 'react';

import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

import classes from './GoogleAuth.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(classes);

const GoogleAuth = ({ changeState, isLogin }) => {
    const [accountImage, setAccountImage] = useState('');

    const className = cx({
        LoginGoogle: true,
    })

    const responseGoogle = (response) => {
        console.log('++++++++++++++++DONE++++++++++++==========')
        changeState('isLogin', true);
        setAccountImage(response.profileObj.imageUrl);
    }

    const googleFailure = (error) => {
        console.log('error', error)
    }
 
    const logout = () => {
        changeState('isLogin', false);
    }

    return (
        <div className={classes.LoginWrapper}>
        {
            isLogin ?
                <>
                    <div className={classes.AccountImg}>
                        <img alt='account_img' src={accountImage} />
                    </div>
                    <GoogleLogout
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText="Logout"
                        onLogoutSuccess={logout}
                        className={className}
                    />
                </> :
                <GoogleLogin
                    clientId="742036064829-dpcmuogppip94tj7gh0hs3u0qgbete2m.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={googleFailure}
                    cookiePolicy={'single_host_origin'}
                    className={className}
                />
        }
    </div>
    )
}

export default GoogleAuth;