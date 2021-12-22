import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss';

const Header = () => {

  return (
    <ul className='header-container'>
      <li>TODOS</li>
      <li>LOGIN</li>  
    </ul>
  )
}

export default Header;
