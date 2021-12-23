import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

const Header = () => {

  return (
    <ul className='header-container'>
      <Link to='/'>TODOS</Link>
      <Link to='/login' >LOGIN</Link>
    </ul>
  )
}

export default Header;
