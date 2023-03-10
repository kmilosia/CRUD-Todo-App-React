import TaskItem from "./components/TaskItem";
import './styles/index.css';
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, updateTaskName } from "./features/Tasks";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

function App() {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.tasks.value);
  const [text, setText] = useState("");
  const [newText, setNewText] = useState("");
  const [isEdited, setIsEdited] = useState(false);
  const newTaskInput = useRef(null);
  const handleInputText = (event) => {
    setText(event.target.value);
  }
  const handleInputNewText = (event) => {
    setNewText(event.target.value);
  }
  const handleAddButton = () => {
    dispatch(addTask({id: taskList[taskList.length -1].id + 1, text: text}));
    newTaskInput.current.value = null;
  }
  return (
    <div className="app">
      <div className="heading">
        <h1>Todo List</h1>
        <div className="input-container">
          <input type="text" placeholder="Write your new task.." onChange={handleInputText} ref={newTaskInput}/>
          <button onClick={handleAddButton}><AddRoundedIcon fontSize="large" sx={{color: "white"}}/></button>
        </div>
      </div>
      <div className="tasks-list">
        {taskList.map((task) => {
          return(
            <div className="task-element">
              <h2 className={isEdited ? 'hide' : ''}>{task.text}</h2>
              <input className={isEdited ? '' : 'hide'} type="text" value={task.text} onChange={handleInputNewText}/>                          
              <div className="buttons">
              <button className={isEdited ? '' : 'hide'} onClick={() => {dispatch(updateTaskName({id: task.id, text: newText})); setIsEdited(!isEdited);}}>
                <SaveAltIcon fontSize="small" className="icon"/>
              </button>
                <button onClick={() => {dispatch(deleteTask({id: task.id})); }}>
                  <DeleteIcon fontSize="small" className="icon"/>
                </button>
                <button onClick={() => { setIsEdited(!isEdited) }}>
                  <EditIcon fontSize="small" className="icon"/>
                </button>
              </div>
            </div>
            )
        })}
      </div>
    </div>
  );
}

export default App;
