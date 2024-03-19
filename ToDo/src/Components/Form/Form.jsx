import { useState } from "react";
import './form.css'

export function Form ({onSubmit}){
    
const [taskInput, setTaskInput] = useState('')

const handleTaksInput = (e) => {
    e.preventDefault();
    setTaskInput(e.target.value);
};

const handleTaks = (e) => {
    e.preventDefault();
    onSubmit(taskInput); 
    setTaskInput(""); 
    
} 
 const submitIsDisable = taskInput.trim().length === 0

    return (
        <section>
            <form onSubmit={handleTaks}> 
                <div className='container-form'>
                    <input
                        value={taskInput}
                        onChange={handleTaksInput}
                        className="form" 
                        placeholder="Add a Task"
                        >
                    </input>
                    <button type="submit" disabled= {submitIsDisable}> 
                    add Task
                     </button>
                </div>
            </form>
        </section>
    )
}