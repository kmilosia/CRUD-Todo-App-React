import React from 'react';
import '../styles/taskItem.css';
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTaskName } from "../features/Tasks";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

function TaskItem(props) {
    const dispatch = useDispatch();
    const [newText, setNewText] = useState(props.task.text);
    const [isEdited, setIsEdited] = useState(false);
    const editInput = useRef(null);
    const handleInputNewText = (event) => {
        setNewText(event.target.value);
      }
      const handleEditButton = () => {
        setIsEdited(!isEdited);
      }

    return(
        <div className="task-element">
          <h2 className={isEdited ? 'hide' : ''}>{props.task.text}</h2>
          <input className={isEdited ? '' : 'hide'} ref={editInput} type="text" value={newText} onChange={handleInputNewText}/>                          
          <div className="buttons">
          <button className={isEdited ? '' : 'hide'} onClick={() => {dispatch(updateTaskName({id: props.task.id, text: newText})); setIsEdited(!isEdited);}}>
            <SaveAltIcon fontSize="small" className="icon" sx={{color:"white"}}/>
          </button>
            <button onClick={() => {dispatch(deleteTask({id: props.task.id})); }}>
              <DeleteIcon fontSize="small" className="icon" sx={{color:"white"}}/>
            </button>
            <button onClick={ handleEditButton }>
              <EditIcon fontSize="small" className="icon" sx={{color:"white"}}/>
            </button>
          </div>
        </div>
        )
}

export default TaskItem;
