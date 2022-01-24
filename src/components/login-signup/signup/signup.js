import './signup.scss';
import React, {useContext, useState} from 'react';
import CustomButton from '../../custom-button/custom-button.js';
import {auth, createUserProfileDocument} from '../../../firebase/firebase.js';

const SignUp = () => {

  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')
  const [regError, setRegError] = useState(false)

  const handleChange = (e) => {
    if (e.target.name === 'displayName') {
      setDisplayName(e.target.value)
    } else if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'password') {
      setPassword(e.target.value)
    } else if (e.target.name === 'confirmedPassword') {
      setConfirmedPassword(e.target.value)
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (password !== confirmedPassword || displayName === '' || email === '') {
      setRegError(true);
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName})
      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmedPassword('');
      setRegError(false)
    } catch(err) {
      console.log('error creating account', err)
    }

  }


  return (

    <div className='sign-container'>

      <h2>Sign Up!</h2>

      <form className='sign-up-form' onSubmit={handleSubmit}>

        <label htmlFor='displayName'>Name</label>
        <input onChange={handleChange} type='text' name='displayName' value={displayName}/>

        <label htmlFor='name'>Email</label>
        <input onChange={handleChange} type='email' name='email' value={email}/>

        <label htmlFor='password'>Password</label>
        <input onChange={handleChange} type='password' name='password' value={password}/>

        <label htmlFor='confirmedPassword'>Confirm password</label>
        <input onChange={handleChange} type='password' name='confirmedPassword' value={confirmedPassword}/>

        <CustomButton type='submit' className='sign-up-button'>Sign up!</CustomButton>

        {
          regError
          ? <span style={{color:'red', fontWeight:'bold', textAlign: 'center', marginTop:'20px'}}> Please ensure all fields are entered correctly </span>
          : null
        }

      </form>

    </div>
  )

}

export default SignUp;
