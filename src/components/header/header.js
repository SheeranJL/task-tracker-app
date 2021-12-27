import React, {useContext} from 'react';
import {appContext} from '../../context/context.js';
import {auth} from '../../firebase/firebase.js';
import {Link} from 'react-router-dom';
import './header.scss';

const Header = () => {

  const {data, actions} = useContext(appContext);

  const handleSignOut = async () => {
    await auth.signOut();
    await actions.setTodo(null)
  }

  return (
    <ul className='header-container'>
      <Link className='link-style' to='/'>TODOS</Link>
      {
        data.currentUser
        ? <li className='logout-button' onClick={handleSignOut}>LOGOUT</li>
        : <Link className='link-style' to='/login'>LOGIN</Link>
      }

    </ul>
  )
}

export default Header;
