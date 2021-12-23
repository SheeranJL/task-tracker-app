import React from 'react';
import './login-signup.scss';
import Header from '../header/header.js'

import Login from './login/login.js'


const LoginAndSignup = () => {

  return (
    <div className='signin-page-container'>
      <Header />

      <div className='auth-methods-container'>

        <div className='sign-in-container'>
          <Login />
        </div>

        <div className='sign-up-container'>
          signup here
        </div>
      </div>

    </div>
  )
}

export default LoginAndSignup;
