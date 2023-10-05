import React, { useState, createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const Context = createContext()

export const ContextProvider = (props) => {
   const [directory, setDirectory] = useLocalStorage('directory', '')
   const [boards, setBoards] = useState({
      titles: [],
      images: {},
   })

   return (
      <Context.Provider
         value={{
            boards,
            setBoards,
            directory,
            setDirectory,
         }}
      >
         {props.children}
      </Context.Provider>
   )
}
