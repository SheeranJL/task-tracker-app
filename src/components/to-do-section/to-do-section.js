import React from 'react';
import './to-do-section.scss';

const ToDoSection = () => {

  return (
    <div className='to-do-section-container'>

      <div className='navigation'>
        <span>Work</span>
        <span className='all'>ALL</span>
        <span>ACTIVE</span>
        <span>COMPLETED</span>
        <span className='priority'>PRIORITY</span>
      </div>

      <div className='each-to-do-container'>
        test
      </div>

    </div>
  )
}

export default ToDoSection;
