import React, {useContext} from 'react';
import {appContext} from '../../context/context.js';
import './profile.scss';

const Profile = () => {

  const {data:{todo}} = useContext(appContext);

  let completedCount;
  let priorityCount;

  if (todo) {
    completedCount = todo.reduce((total, current) => {
      if (current.done) {
        return total += 1
      } else {
        return total += 0
      }
    }, 0)
  }

  if (todo) {
    priorityCount = todo.reduce((total, current) => {
      if (current.priority === 'High' && current.done !== true) {
        return total += 1
      } else {
        return total += 0
      }
    }, 0)
  }


  console.log(completedCount)

  return (
    <div className='profile-container'>

      <div className='person-info'>
        <img src='https://randomuser.me/api/portraits/women/12.jpg' />
        <span>Test Name</span>
        <span>randomemail@email.com</span>
      </div>

      <div className='stats'>

        <div className='completed-info'>
          <span>{todo ? todo.length : 0}</span>
          <span>tasks</span>
        </div>

        <div className='completed-info'>
          <span>{ todo ? completedCount : 0}</span>
          <span>completed</span>
        </div>

        <div className='completed-info'>
          <span>{todo ? priorityCount : 0}</span>
          <span>Priority</span>
        </div>

      </div>

    </div>
  )
}

export default Profile;
