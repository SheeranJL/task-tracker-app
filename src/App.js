import React, {useContext, useEffect, useState} from 'react';
import {appContext} from './context/context.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.js';

import './app.scss'

import ProfileInfo from './components/right-side-profile/right-side-profile.js'
import HomePage from './components/homepage/homepage.js';
import LoginAndSignup from './components/login-signup/login-signup.js';


const App = () => {

  const {actions, data} = useContext(appContext);

  let unsubscribeFromAuth = null;

  useEffect(() => {

    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        console.log(userAuth)
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          console.log(userAuth)
          actions.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data,
            userData: {
              displayName: userAuth.multiFactor.user.displayName,
              email: userAuth.multiFactor.user.email,
              photo: userAuth.multiFactor.user.photoURL,
            }
          });
        });
      }

      actions.setCurrentUser(userAuth);
    })
  }, [])


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
