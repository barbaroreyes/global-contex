import {createContext , useContext ,useState} from 'react';

export const TaskContext = createContext()

export const useTask = () => useContext(TaskContext)

export const TaskProvider = ({children}) => {
  const [tasks , setTask] = useState([{id:'1',title:'first task',dec:"some task"}])
  
    return <TaskContext.Provider value={{tasks}}>{children} </TaskContext.Provider>
    
}