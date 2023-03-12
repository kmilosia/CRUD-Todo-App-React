import TaskItem from "./components/TaskItem";
import './styles/index.css';
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "./features/Tasks";
import AddRoundedIcon from '@mui/icons-material/AddRounded';


function App() {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.tasks.value);
  const count = useSelector((state) => state.tasks.count);
  const [text, setText] = useState("");
  const newTaskInput = useRef(null);
  const handleInputText = (event) => {
    setText(event.target.value);
  }
  const handleAddButton = () => {
    if(text !== null && text !== ""){
      dispatch(addTask({id: count + 1, text: text}));
      newTaskInput.current.value = null;
      setText(null);
      newTaskInput.current.focus();
    }
  }
  return (
    <div className="app">
      <div className="heading">
        <h1>Todo List</h1>
        <div className="input-container">
          <input spellCheck={false} autoFocus type="text" placeholder="Write your new task.." onChange={handleInputText} ref={newTaskInput}/>
          <button onClick={handleAddButton}><AddRoundedIcon fontSize="large" sx={{color: "white"}}/></button>
        </div>
      </div>
      <div className="tasks-list">
        {count > 0 && taskList.map((task) => {
          return <TaskItem key={task.id} task={task}/>
        })}
      </div>
    </div>
  );
}

export default App;
