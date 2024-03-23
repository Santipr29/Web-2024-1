import { Button } from '../Buttons/Button'
import './Task.css'

export function Task (props) {

  const { 
    titleTask,
    dateTask,
    done, 
    onToggle,
    onDelete 
  } = props 

  const handleCheckboxChange = (e) => {
    onToggle();
  };

  return (
    <article className='task'>
      <input
        type="checkbox" 
        checked={done} 
        onChange={handleCheckboxChange} 
      />
      <h2>{titleTask}</h2>
      <p>Fecha de entrega: {dateTask}</p>
      < Button title="Delete" 
              onClick={onDelete}
      />
    </article>     
    )
}
