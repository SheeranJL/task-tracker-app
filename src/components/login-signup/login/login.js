import React, {useContext, useState, useEffect} from 'react';
import {appContext} from '../../../context/context.js'
import {useHistory} from 'react-router-dom';
import './login.scss';
import {signInWithGoogle, auth} from '../../../firebase/firebase.js'
import CustomButton from '../../custom-button/custom-button.js';


const Login = () => {

  const {data} = useContext(appContext);
  const history = useHistory();

  useEffect(() => {

    if (data.currentUser) {
      history.push('/')
    }

  }, [data.currentUser])


  const handleSubmit = (e) => {
    e.preventDefault();
  }



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
