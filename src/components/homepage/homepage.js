import React, {useContext, useState} from 'react';
import './homepage.scss';


import Header from '../header/header.js';
import ProfileInfo from '../right-side-profile/right-side-profile.js'
import ToDoSection from '../to-do-section/to-do-section.js';
import Modal from '../modal/modal.js'



const HomePage = () => {

  const [toggleModal, setToggleModal] = useState(false);


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
            toggleModal
            ? <Modal toggleModal={setToggleModal}/>
            : null
          }

          <ToDoSection />

          <button className='add-task-button' onClick={() => setToggleModal(!toggleModal)}>Add task</button>


      </div>
    </div>
  )
}

export default HomePage;
