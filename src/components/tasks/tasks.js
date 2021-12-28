import React, {useContext, useState} from 'react';
import {appContext} from '../../context/context.js';
import './tasks.scss';
const Sugar = require('sugar');

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
    actions.setSelectedPriority(task.priority)

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

  function handleDeleteTask() {
    actions.setDeleteTask(task)
  }

  function truncateString(string, maxNum) {
    const length = maxNum;
    const truncated = string.length > length ? string.slice(0, length - 1) + '...' : string
    return truncated

  };

  return (

    <div className='task-container'>

      <div className='task-options'>
        <div className='priority-banner' style={{backgroundColor: setPriorityColor()}} />
        <button className='task-button' onClick={handleDeleteTask}>X</button>
        <button className='task-button' onClick={handleEditTask}>&#9776;</button>
        <button onClick={() => handleToggleDone()} className={task.done ? 'task-button active' : 'task-button'}>&#10004;</button>
      </div>

      <div className='task-name-and-time'>
        <span className='task-title'>{truncateString(task.query, 23)}</span>
      </div>

      <div className='additional-notes'>
        <p>{task.additionalNotes ? truncateString(task.additionalNotes, 35) : 'none'}</p>
      </div>

    </div>
  )

}

export default Task;
