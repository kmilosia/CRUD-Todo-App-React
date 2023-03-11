import React from 'react';
import '../styles/taskItem.css';
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTaskName } from "../features/Tasks";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Checkbox } from '@mui/material';

function TaskItem(props) {
    const dispatch = useDispatch();
    const [newText, setNewText] = useState(props.task.text);
    const [isEdited, setIsEdited] = useState(false);
    const [checked, setChecked] = useState(false);
    const handleInputNewText = (event) => {
        setNewText(event.target.value);
      }
    const handleEditButton = () => {
        setIsEdited(!isEdited);
    }
    const handleChecked = () => {
      setChecked(!checked);
    }

    return(
        <div className="task-element">
          <div className='box'>
          <Checkbox className='checkbox' type="checkbox" checked={checked} onClick={handleChecked} />
          {!isEdited ? <h2 className={checked ? 'lined' : ''}>{props.task.text}</h2> : <input value={newText} spellCheck={false} autoFocus type="text" onChange={handleInputNewText}/>}
          </div>
          <div className="buttons">
          <button className={isEdited ? '' : 'hide'} onClick={() => {dispatch(updateTaskName({id: props.task.id, text: newText})); setIsEdited(!isEdited);}}>
            <SaveAltIcon fontSize="small" className="icon"/>
          </button>
            <button onClick={() => {dispatch(deleteTask({id: props.task.id})); }}>
              <DeleteIcon fontSize="small" className="icon"/>
            </button>
            <button onClick= {handleEditButton}>
              <EditIcon fontSize="small" className="icon"/>
            </button>
          </div>
        </div>
        )
}

export default TaskItem;
