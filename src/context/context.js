import React, {createContext, useState, useEffect, useRef} from 'react';
import {saveDataToFirestore, onLoginData} from '../firebase/firebase.js';

export const appContext = createContext();

export const Provider = (props) => {

  //global ToDo state//
  const [todo, setTodo] = useState([]);

  //Modal State//
  const [toggleModal, setToggleModal] = useState(false);
  const [query, setQuery] = useState('');
  const [priority, setPriority] = useState(null)
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [additionalNotes, setAdditionalNotes] = useState('')
  const [edit, setEdit] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const isFirstRender = useRef(true)


  //This code will execute when there's a change to the todo state and will execute the if statement to store data to firestore//
  useEffect(() => {
    if (currentUser) {
      saveDataToFirestore(currentUser.id, todo);
    }
  }, [todo])


  const addNewToDo = (item) => {
    if (todo) {
      setTodo([...todo, item])
    } else {
      setTodo([item]);
    }
  }


  const setDoneStatus = (items, itemToToggle) => {
    const existingItem = items.find((a) => a.id === itemToToggle.id);
    return items.map((item) =>
      item.id === itemToToggle.id
      ? {...item, done: !item.done}
      : item
    )
  }

  const setEditTask = (tasks, taskToEdit, details) => {
    const existingItem = tasks.find(task => task.id === taskToEdit);
     return tasks.map((item) =>
       item.id === taskToEdit
       ? {...item, query: details.query, additionalNotes: details.additionalNotes, priority: details.priority}
       : item
     )
  }

  const setDeleteTask = (task) => {
    const filtered = todo.filter(a => a.id !== task.id);
    setTodo(filtered);
  }


  return (
    <appContext.Provider value={{
      data: {
        todo,
        query,
        priority,
        additionalNotes,
        toggleModal,
        edit,
        currentUser,
        selectedPriority,
        isFirstRender,
      },
      actions: {
        addNewToDo,
        setDoneStatus,
        setTodo,
        setQuery,
        setPriority,
        setAdditionalNotes,
        setToggleModal,
        setEdit,
        setEditTask,
        setCurrentUser,
        setDeleteTask,
        setSelectedPriority,
      }
    }}>
      {props.children}
    </appContext.Provider>
  )
}
