import { Button } from "../Buttons/Button";
import './Footer.css';
import { useTask } from "../../Hooks/useTask"

export function Footer (){
    
    const {
        deleteAllTask,
        allTaskCount,
        completedTaskCount,
    } = useTask()

    return(
            <footer>
                <p className="title-footer"> {completedTaskCount()} Completed Tasks of {allTaskCount()} </p>
                <Button title="Clear All Completed" onClick ={deleteAllTask }/>
            </footer>
    )
}