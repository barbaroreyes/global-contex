import {createContext , useContext } from 'react';

export const TaskContext = createContext()

export const useTask = () => {
    const context = useContext(TaskContext);
    return context

}

export const TaskProvider = ({children}) => {
    let hello = 'hello';
   const great = name =>`Hello ${name}` 
    return <TaskContext.Provider value={{hello ,great}}>{children} </TaskContext.Provider>
    
}