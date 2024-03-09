import { Button } from '../Buttons/Button'
import './Task.css'

export function Task (props) {
  const {titleTask} = props 
  return (
    <article className='task'>
      <input type="checkbox"/>
      <h2>{titleTask}</h2>
      <Button title="Delete"/>
    </article>     
    )
}
