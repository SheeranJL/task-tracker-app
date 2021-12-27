import React, {useContext, useState} from 'react';
import {appContext} from '../../context/context.js';
import './modal.scss';

const Modal = ({toggleModal}) => {

  const {actions: {setQuery, addEditedToState, setPriority, setSelectedPriority, setAdditionalNotes, addNewToDo, setEdit, setEditTask, setTodo, setToggleModal}, data: {query, priority, additionalNotes, selectedPriority, edit, todo}} = useContext(appContext)


  const handleSubmit = (e) => {

    e.preventDefault()

    if (!edit) {
      if (query === '' || priority === null) {
        alert('Please enter a to-do and a priority level')
        return
      }

      let date = new Date();
      let minute = date.getMinutes();
      let hour = date.getHours();
      let seconds = date.getSeconds();
      let day = date.getDate();
      let month = date.getMonth();
      let year = date.getYear();

      let id = ''
      const characters = 'ABCDEFGHIJKLMNOPQUSTUVWXYZ123456789';
      for (let i = 0; i < 12; i++) {
        id += characters.charAt(Math.floor(Math.random() * 36 ));
      };

      let timeCreated = {
        timeCreated : `${day}/${month}/${year - 100} ${hour}:${minute}:${seconds}`
      };

      let item = {
        query,
        priority,
        additionalNotes,
        timeCreated,
        id,
        done: false,
      }

      addNewToDo(item);
      toggleModal(false);
      setQuery('');
      setPriority(null);
      setAdditionalNotes(null);
    } else {
      let item = {
        query,
        priority,
        additionalNotes,
        edit,
        done: false,
      }
      const updatedItem = setEditTask(todo, edit, item);
      setTodo(updatedItem)
      setToggleModal(false)
      toggleModal(false);
      setQuery('');
      setPriority(null);
      setAdditionalNotes('');
      setEdit(null);
      setSelectedPriority(null)
    }
  }

  const handleCloseModal = () => {
    toggleModal(false);
    setQuery('');
    setPriority(null);
    setAdditionalNotes('');
    setEdit(null);
    setSelectedPriority(null)
  }

  const handleSetPriority = (e) => {
    setSelectedPriority(e.target.innerHTML)
    setPriority(e.target.innerHTML)
  }


  return (
    <div className='modal'>
      <button className='close-button' onClick={() => handleCloseModal()}>X</button>

      <form onSubmit={handleSubmit}>

      <div className='modal-form'>

        <div className='to-do-form-todo'>
          <span>To-Do</span>
          <input type='text' name='to-do' value={query} onChange={ (e) => setQuery(e.target.value)}/>


          <div className='priority'>
            <div onClick={handleSetPriority} className={selectedPriority === 'High' ? 'red-priority red-selected' : 'red-priority'}>High</div>
            <div onClick={handleSetPriority} className={selectedPriority === 'Medium' ? 'orange-priority orange-selected' : 'orange-priority'}>Medium</div>
            <div onClick={handleSetPriority} className={selectedPriority === 'Low' ? 'green-priority green-selected' : 'green-priority'}>Low</div>
          </div>

        </div>

        <div className='to-do-form'>
          <span>Additional notes</span>
          <textarea className='additional-notes' type='text' placeholder='(optional)' value={additionalNotes} onChange={(e) => setAdditionalNotes(e.target.value)} />
        </div>



      </div>
        <button type='submit' className='modal-submit-button'>Submit</button>
    </form>

    </div>
  )
}

export default Modal;
