import React, {useContext, useState} from 'react';
import {appContext} from '../../context/context.js';
import './profile.scss';

const Profile = () => {

  const {data:{todo}, data: {currentUser}} = useContext(appContext);
  const [loading, setLoading] = useState(true)

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

  setTimeout(() => {
    setLoading(false)
  }, 1200)

  return (
    <div className='profile-container'>

      {
        loading !== true && currentUser
        ? (
          <div className='person-info'>
              <img src={currentUser !== null ? currentUser.userData.photo : 'https://p.kindpng.com/picc/s/150-1503922_user-png-grey-transparent-png.png'}  />
              <span>{`Welcome ${currentUser.userData.displayName}`}</span>
          </div>
        ) : (
          <div className='person-info'>
              <img src={'https://p.kindpng.com/picc/s/150-1503922_user-png-grey-transparent-png.png' || 'https://p.kindpng.com/picc/s/150-1503922_user-png-grey-transparent-png.png'} />
              <span>Log in to save data</span>
          </div>
        )
      }


      <div className='stats'>

        <div className='completed-info'>
          <span className='info-stat'>{todo ? todo.length : 0}</span>
          <span>tasks</span>
        </div>

        <div className='completed-info'>
          <span className='info-stat'>{ todo ? completedCount : 0}</span>
          <span>completed</span>
        </div>

        <div className='completed-info'>
          <span className={ priorityCount > 0 ? 'info-stat priority' : 'info-stat green'}>{todo ? priorityCount : 0}</span>
          <span>Priority</span>
        </div>

      </div>

    </div>
  )
}

export default Profile;
