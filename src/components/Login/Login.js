import React from 'react';
//css
import "../../css/Login/Login.css";
//icon
import Button from '@material-ui/core/Button';

import { auth, provider } from '../../firebase';
import {actionTypes} from "../../reducer"
import {useStateValue } from "../../StateProvider"

function Login() {

   const [state, dispatch] = useStateValue();

     const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result.user);
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">

            <div className="login__logo">
                <img
                    src="//upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/100px-Facebook_f_logo_%282021%29.svg.png"
                    alt=""

                />
               <img 
                   src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                   alt=""
               />

            </div>
            <Button type="submit" onClick={signIn} >Sign In</Button>

        </div>
    );
}

export default Login;
