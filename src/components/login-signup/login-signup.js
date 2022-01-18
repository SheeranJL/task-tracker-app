import React from 'react';
import './login-signup.scss';
import Header from '../header/header.js'

import Login from './login/login.js';
import SignUp from './signup/signup.js';

const LoginAndSignup = () => {

  return (
    <div className='signin-page-container'>
      <Header />

      <div className='auth-methods-container'>

        <div className='sign-in-container'>
          <Login />
        </div>

        <div className='division'/>

        <div className='sign-up-container'>
          <SignUp />
        </div>
      </div>

    </div>
  )
}

export default LoginAndSignup;
