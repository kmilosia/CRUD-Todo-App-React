import TaskItem from "./components/TaskItem";
import './styles/index.css';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, updateTaskName } from "./features/Tasks";
import AddIcon from '@mui/icons-material/Add';

function App() {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.tasks.value);
  const [text, setText] = useState("");
  const [newText, setNewText] = useState("");

  return (
    <div className="app">
      <div className="heading">
        <h1>Todo List</h1>
        <div className="input-container">
          <input type="text" placeholder="Write your new task.." />
          <button><AddIcon color="primary"/></button>
        </div>
      </div>
    </div>
  );
}

export default App;
