import React, {useContext, useEffect, useState} from 'react';
import {appContext} from './context/context.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.js';
import {saveDataToFirebase, onLoginData} from './firebase/firebase.js';

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
        const userRef = await createUserProfileDocument(userAuth, data.todo);

        userRef.onSnapshot(snapShot => {
          console.log(snapShot.data)
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

        const getDataFromFirestore = async() => {
          const firestoreData = await onLoginData(userAuth.uid)
          const response = await firestoreData;
          console.log(firestoreData)
          const test = await response.data.map(item => item)
          await actions.setTodo([...test])

        }
        getDataFromFirestore();
      }

      actions.setCurrentUser(userAuth);
      data.isFirstRender.current = true;
    })

  }, [])


  return (
    <div className='app-container'>
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={LoginAndSignup} />
      </Router>
    </div>
  )

}

export default App;
