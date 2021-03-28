import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
// import {auth,provider} from './firebase.js';
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyATg7ZwxP1C6cjNmtjxuuHCKDlq0v_ijho",
    authDomain: "g-chat-258ae.firebaseapp.com",
    projectId: "g-chat-258ae",
    storageBucket: "g-chat-258ae.appspot.com",
    messagingSenderId: "914908545998",
    appId: "1:914908545998:web:7a27802edfe80ee0b8a19f"
  };

function Login() {

    const signIn = () => {
        const firebaseApp = firebase.initializeApp(firebaseConfig);
        const auth = firebaseApp.auth();
        const provider = new firebase.auth.GoogleAuthProvider();
        auth
        .signInWithPopup(provider)
        .then((res)=>console.log(res))
        .catch((e)=>alert(e.message))
    }
    return (
        <div className = 'login'>
            <div className = 'login__container'>
                <div className = 'login__logo'>
                    <img src = 'https://play-lh.googleusercontent.com/cF_oWC9Io_I9smEBhjhUHkOO6vX5wMbZJgFpGny4MkMMtz25iIJEh2wASdbbEN7jseAx' alt ='logo'/>
                </div>
                <div className ='login__Info'>
                    <h2>Sign in to GChat</h2>
                </div>
                <Button onClick = {signIn} style = {{textTransform:'inherit',backgroundColor:'rgb(11, 187, 128)',color:'white',marginTop:'30px'}}>Sign In With Google</Button>
            </div>
        </div>
    );
}

export default Login;
