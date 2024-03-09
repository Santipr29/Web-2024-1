import { useState } from 'react'
import './App.css'
import {Header, Form, Filter, Task, Footer} from './Components/index'

function App() {

  const [tasks, setTasks] = useState([])

  function AddTask (taskName) {
    console.log(taskName); 
    const newTask = {
    id: crypto.randomUUID(),
    name: taskName,
    done: false
  }
  setTasks(prevArray => [...prevArray, newTask])
  }

  const handleToggleTask = (taskId) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <>
      <Header/>
      <Form onSubmit={AddTask} />
      <Filter/>
      <section className='BigContainer'>
      {tasks.map(({ name, id, done }) => {
        return (
          <div key={id}>
            <Task
              titleTask={name} 
              done={done} 
              onToggle={() => handleToggleTask(id)}  
            />
          </div>
        )
      })}
      </section>
      <Footer/>
    </>
  )
}

export default App
