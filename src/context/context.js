import React, {createContext, useState, useEffect} from 'react';

export const appContext = createContext();

export const Provider = (props) => {

  const [todo, setTodo] = useState(null);


  const addNewToDo = (item) => {

    if (todo) {
      setTodo([...todo, item])
    } else {
      setTodo([item]);
    }

  }

  return (
    <appContext.Provider value={{
      data: {
        todo,
      },
      actions: {
        addNewToDo,
      }
    }}>
      {props.children}
    </appContext.Provider>
  )
}
