import React, {useContext, useState} from 'react';
import {appContext} from '../../context/context.js';
import './modal.scss';

const Modal = ({toggleModal}) => {

  const {actions} = useContext(appContext);
  const [query, setQuery] = useState('');
  const [priority, setPriority] = useState(null)
  const [additionalNotes, setAdditionalNotes] = useState(null)



  const handleSubmit = (e) => {
    e.preventDefault()

    if (query === '' || priority === null) {
      alert('Please enter a to-do and a priority level')
      return
    }

    let item = {
      query,
      priority,
      additionalNotes
    }

    actions.addNewToDo(item);
    toggleModal(false);
    setQuery('');
    setPriority(null);
    setAdditionalNotes(null);

  }


  return (
    <div className='modal'>
      <button className='close-button' onClick={() => toggleModal(false)}>X</button>

      <form onSubmit={handleSubmit}>

      <div className='modal-form'>

        <div className='to-do-form-todo'>
          <span>To-Do</span>
          <input type='text' name='to-do' value={query} onChange={ (e) => setQuery(e.target.value)}/>


          <div className='priority'>
            <div onClick={(e) => setPriority(e.target.innerHTML)} className='red-priority'>High</div>
            <div onClick={(e) => setPriority(e.target.innerHTML)} className='orange-priority'>Medium</div>
            <div onClick={(e) => setPriority(e.target.innerHTML)} className='green-priority'>Low</div>
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
