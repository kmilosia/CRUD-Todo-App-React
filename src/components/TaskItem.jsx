import React from 'react';
import '../styles/taskItem.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function TaskItem() {
  return (
    <div className='task-container'>
      <div className="row">
        <h2>Task text</h2>
        <div className="buttons">
            <button><DeleteIcon color='primary'/></button>
            <button><EditIcon color='primary'/></button>
        </div>
      </div>
    </div>
  )
}

export default TaskItem;
