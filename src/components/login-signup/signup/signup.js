import './signup.scss';
import React, {useContext, useState} from 'react';

const SignUp = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmedPassword, setConfirmedPassword] = useState('')

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value)
    } else if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'password') {
      setPassword(e.target.value)
    } else if (e.target.name === 'confirmedPassword') {
      setConfirmedPassword(e.target.value)
    }
  }

  return (

    <div className='sign-container'>

      <h2>Sign Up!</h2>

      <form className='sign-up-form'>

        <label for='name'>Name</label>
        <input onChange={handleChange} type='text' name='name' value={name}/>

        <label for='name'>Email</label>
        <input onChange={handleChange} type='email' name='email' value={email}/>

        <label for='password'>Password</label>
        <input onChange={handleChange} type='password' name='password' value={password}/>

        <label for='confirmedPassword'>Confirm password</label>
        <input onChange={handleChange} type='password' name='confirmedPassword' value={confirmedPassword}/>

      </form>

    </div>
  )

}

export default SignUp;
