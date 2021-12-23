import React, {useContext} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './app.scss'

import ProfileInfo from './components/right-side-profile/right-side-profile.js'
import HomePage from './components/homepage/homepage.js';
import LoginAndSignup from './components/login-signup/login-signup.js';


const App = () => {

  return (
    <div className='app-container'>
      <Router>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={LoginAndSignup} />
      </Router>
    </div>
  )

}

export default App;
