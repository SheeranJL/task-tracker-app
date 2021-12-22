import React, {createContext, useState, useEffect} from 'react';

export const appContext = createContext();

export const Provider = (props) => {

  const [todo, setTodo] = useState(null);
  const [completed, setCompleted] = useState(null);
  const [priority, setPriority] = useState(null);






  return (
    <appContext.Provider value={{
      data: {
        todo,
        completed,
        priority
      },
      actions: {

      }
    }}>
      {props.children}
    </appContext.Provider>
  )
}
