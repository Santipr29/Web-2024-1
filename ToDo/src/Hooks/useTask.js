import { useContext } from 'react'
import { TaskContext } from '../Context/TaskContext';

export const useTask = () => {
  
  const context = useContext(TaskContext);
  
  if(!context){
     throw new Error("No context provider ") 
  }
  
  return {
    ...context
  }
}