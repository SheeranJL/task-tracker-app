import React, {useContext, useState} from 'react';
import {appContext} from '../../../context/context.js'
import './login.scss';

const Login = () => {

  return (

    <div className='login-container'>

      <h2>Already have an account?</h2>

      <form className='sign-in-form'>
        <label for='username'>Email</label>
        <input type='email' name='username'/>

        <label className='password' for='password'>Password</label>
        <input type='password' name='password'/>

      </form>

    </div>
  )

}

export default Login;
