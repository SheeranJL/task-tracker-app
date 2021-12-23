import React, {useContext, useState} from 'react';
import {appContext} from '../../context/context.js';
import './tasks.scss';

const Task = ({task}) => {

  const {actions, data} = useContext(appContext);

  const handleToggleDone = () => {
    const list = actions.setDoneStatus(data.todo, task);
    actions.setTodo(list)
  }

  const handleEditTask = () => {
    actions.setToggleModal(!data.toggleModal)
    actions.setQuery(task.query);
    actions.setPriority(task.priority);
    actions.setAdditionalNotes(task.additionalNotes);
    actions.setEdit(task.id)
  }


  function setPriorityColor() {
    if (task.priority === 'High') {
      return 'red'
    } else if (task.priority === 'Medium') {
      return 'orange'
    } else {
      return 'green'
    }
  };


  return (

    <div className='task-container'>

      <div className='task-options'>
        <div className='priority-banner' style={{backgroundColor: setPriorityColor()}} />
        <button className='task-button'>X</button>
        <button className='task-button' onClick={() => handleEditTask()}>&#9776;</button>
        <button onClick={() => handleToggleDone()} className={task.done ? 'task-button active' : 'task-button'}>&#10004;</button>
      </div>

      <div className='task-name-and-time'>
        <span className='task-title'>{task.query}</span>

      </div>

    </div>
  )

}

export default Task;
