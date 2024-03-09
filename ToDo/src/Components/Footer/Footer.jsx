import { Button } from "../Buttons/Button";
import './Footer.css';
export function Footer (){
    return(
        <footer className="footer">
                <h5 className="TitleFooter"> 4 Tareas Completadas de 5 </h5>
                <Button title="Clear All Completed"/>
        </footer>
    )
}