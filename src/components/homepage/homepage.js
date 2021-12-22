import React from 'react';
import './homepage.scss';

import Header from '../header/header.js';
import ProfileInfo from '../right-side-profile/right-side-profile.js'
import ToDoSection from '../to-do-section/to-do-section.js';

const HomePage = () => {

  return (
    <div className='homepage-container'>
        <div className='profile-info'>
          <ProfileInfo />
        </div>
      <div className='main-page'>
          <div className='header'>
            <Header />
          </div>

          <ToDoSection />

      </div>
    </div>
  )
}

export default HomePage;
