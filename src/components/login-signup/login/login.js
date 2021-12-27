import React, {useContext, useState, useEffect} from 'react';
import {appContext} from '../../../context/context.js'
import {useHistory} from 'react-router-dom';
import './login.scss';
import {signInWithGoogle, auth} from '../../../firebase/firebase.js'
import CustomButton from '../../custom-button/custom-button.js';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {data} = useContext(appContext);
  const history = useHistory();


  useEffect(() => {
    if (data.currentUser) {
      history.push('/')
    }
  }, [data.currentUser]);

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setEmail('');
      setPassword('');
    } catch(err) {
      console.log('error signing in with e/p', err);
    }
  };



  return (
    <div className='login-container'>
      <h2>Already have an account?</h2>

      <form className='sign-in-form' onSubmit={handleSubmit}>

        <label for='username'>Email</label>
        <input onChange={handleChange} type='email' name='email' value={email}/>

        <label className='password' for='password'>Password</label>
        <input onChange={handleChange} type='password' name='password' value={password}/>

        <div className='buttons'>
          <CustomButton> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Google Sign In</CustomButton>
        </div>

      </form>
    </div>
  )

}

export default Login;
