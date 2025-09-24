import './task.css';
function Task(props){
   return( 
   <div className="taskDiv">
    <h1>{props.title}</h1>
    <p className="taskDes">{props.description}</p>
    <p className="taskMem">{props.number} members {props.date}</p>
    </div>
   )
}
export default Task;