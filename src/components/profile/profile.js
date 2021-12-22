import React, {useContext} from 'react';
import './profile.scss';

const Profile = () => {

  return (
    <div className='profile-container'>

      <div className='person-info'>
        <img src='https://randomuser.me/api/portraits/women/12.jpg' />
        <span>Test Name</span>
        <span>randomemail@email.com</span>
      </div>

      <div className='stats'>

        <div className='completed-info'>
          <span>4</span>
          <span>tasks</span>
        </div>

        <div className='completed-info'>
          <span>5</span>
          <span>completed</span>
        </div>

        <div className='completed-info'>
          <span>3</span>
          <span>Priority</span>
        </div>

      </div>

    </div>
  )
}

export default Profile;
