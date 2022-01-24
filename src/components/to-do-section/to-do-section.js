import React, {useContext, useState, useEffect} from 'react';
import {appContext} from '../../context/context.js';
import './to-do-section.scss';

import Task from '../tasks/tasks.js';

const ToDoSection = () => {

  const {data: {todo, toggleModal}, actions } = useContext(appContext);

  const [filter, setFilter] = useState(todo)
  const [filterQuery, setFilterQuery] = useState('ALL')

  useEffect(() => {


    function filteredToDo() {
      let items;
      if (filterQuery === 'ALL') {
        setFilter(todo)
      } else if (filterQuery === 'ACTIVE' && todo) {
        items = todo.filter(item => item.done === false)
        setFilter(items);
      } else if (filterQuery === 'COMPLETED' && todo) {
        items = todo.filter(item => item.done === true)
        setFilter(items);
      } else if (filterQuery === 'PRIORITY' && todo) {
        items = todo.filter(item => item.priority === 'High' && item.done !== true)
        setFilter(items);
      }
    }
    filteredToDo()
  }, [filterQuery, todo])

  const handleChangeCategory = (e) => {
    if (!filter) return
    setFilterQuery(e.target.innerHTML)
  }

  console.log(todo.length)

  return (
    <div className='todo-section-container'>

      <div className='navigation-container'>
        <div className='navigation'>
          <button className='add-task-button' onClick={() => actions.setToggleModal(!toggleModal)}>NEW TASK</button>
          <span onClick={handleChangeCategory} className={filterQuery === 'ALL' ? 'selected-option all' : 'all'}>ALL</span>
          <span onClick={handleChangeCategory} className={filterQuery === 'ACTIVE' ? 'selected-option active' : 'active'}>ACTIVE</span>
          <span onClick={handleChangeCategory} className={filterQuery === 'COMPLETED' ? 'selected-option completed' : 'completed'}>COMPLETED</span>
          <span onClick={handleChangeCategory} className={filterQuery === 'PRIORITY' ? 'selected-option priority' : 'priority'}>PRIORITY</span>
        </div>
      </div>

      {
        todo.length
        ? (
          <div className='summary'>
            <span className='priority-summary'>Priority and Options</span>
            <span className='summary-name'>Task name</span>
            <span className='summary-notes'>Comments</span>
          </div>
        )
        : null
      }


      <div className='each-to-do-container'>
      {
        filter
        ? filter.map((task, index) => <Task task={task} key={index}/>)
        : null
      }
      {
        todo.length
        ? null
        : (
          <div className='task-section-desc'>
            <h1> Tasks you add will appear here </h1>
          </div>
        )
      }
      </div>

    </div>
  )
}

export default ToDoSection;
