import React, {useContext} from 'react';
import {appContext} from '../../context/context.js';
import {auth} from '../../firebase/firebase.js';
import {Link} from 'react-router-dom';
import './header.scss';

const Header = () => {

  const {data} = useContext(appContext);

  return (
    <ul className='header-container'>
      <Link to='/'>TODOS</Link>
      {
        data.currentUser
        ? <div onClick={() => auth.signOut()}>Logout</div>
        : <Link to='/login' >LOGIN</Link>
      }

    </ul>
  )
}

export default Header;
