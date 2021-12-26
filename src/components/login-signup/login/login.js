import React, {useContext, useState} from 'react';
import {appContext} from '../../../context/context.js'
import './login.scss';
import {signInWithGoogle, auth} from '../../../firebase/firebase.js'
import CustomButton from '../../custom-button/custom-button.js';


const Login = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  console.log(signInWithGoogle)

  return (
    <div className='login-container'>
      <h2>Already have an account?</h2>

      <form className='sign-in-form' onSubmit={handleSubmit}>
        <label for='username'>Email</label>
        <input type='email' name='username'/>
        <label className='password' for='password'>Password</label>
        <input type='password' name='password'/>
        <div className='buttons'>
          <CustomButton> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle}>Google Sign In</CustomButton>
        </div>
      </form>
    </div>
  )

}

export default Login;
