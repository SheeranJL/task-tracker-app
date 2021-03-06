import React, {useContext} from 'react';
import {appContext} from '../../context/context.js';
import {auth} from '../../firebase/firebase.js';
import {Link} from 'react-router-dom';
import './header.scss';

const Header = () => {

  const {data, actions} = useContext(appContext);

  const handleSignOut = async () => {
    await auth.signOut();
    await actions.setTodo([])
  }

  return (
    <ul className='header-container'>
      <Link className='link-style' to='/'>TASKS</Link>
      {
        data.currentUser
        ? <li className='logout-button' onClick={handleSignOut}>LOGOUT</li>
        : <Link className='link-style login' to='/login'>LOGIN</Link>
      }

    </ul>
  )
}

export default Header;
