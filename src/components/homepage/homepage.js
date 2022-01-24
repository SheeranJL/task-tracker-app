import React, {useContext, useState} from 'react';
import {appContext} from '../../context/context.js';
import './homepage.scss';


import Header from '../header/header.js';
import ProfileInfo from '../right-side-profile/right-side-profile.js'
import ToDoSection from '../to-do-section/to-do-section.js';
import Modal from '../modal/modal.js'



const HomePage = () => {


  const {actions, data} = useContext(appContext);

  return (
    <div className='homepage-container'>
        <div className='profile-info'>

          <ProfileInfo />
        </div>

      <div className='main-page'>

          <div className='header'>
            <Header />
          </div>

          {
            data.toggleModal
            ? <Modal toggleModal={actions.setToggleModal}/>
            : null
          }

          <div className='to-do-section-container'>
            <ToDoSection />
          </div>
      </div>
    </div>
  )
}

export default HomePage;
