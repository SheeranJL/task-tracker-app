import React, {createContext, useState, useEffect, useRef} from 'react';

export const appContext = createContext();

export const Provider = (props) => {

  //global ToDo state//
  const [todo, setTodo] = useState(null);

  //Modal State//
  const [toggleModal, setToggleModal] = useState(false);
  const [query, setQuery] = useState('');
  const [priority, setPriority] = useState(null)
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [additionalNotes, setAdditionalNotes] = useState('')
  const [edit, setEdit] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const isFirstRender = useRef(true)

  useEffect(() => {

    if (isFirstRender.current) {
      const dataFromLocalStorage = localStorage.getItem('stateData');
      if (dataFromLocalStorage) {
        const appData = JSON.parse(dataFromLocalStorage);
        setTodo(appData);
      }
      isFirstRender.current = false;
    }

    const saveToLocalStorage = () => {
      if (localStorage) {
        console.log('hello')
        localStorage.setItem('stateData', JSON.stringify(todo))
      }
    }
    saveToLocalStorage()
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
    console.log(task)
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
        selectedPriority
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
        setSelectedPriority
      }
    }}>
      {props.children}
    </appContext.Provider>
  )
}
