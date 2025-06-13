import { useState, useEffect, useRef } from 'react';
import { FaPlusSquare, FaEdit } from 'react-icons/fa';

function TaskForm({ dispatch, editingTask, setEditingTask }){
  const[taskText, setTaskText] = useState('');
  const textbox = useRef(null);

  useEffect(() => {
    if (editingTask){
      setTaskText(editingTask.text);
      textbox.current?.focus();
    } else{
      setTaskText('');
    }
  }, [editingTask]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!taskText.trim()) return;

    const currentDate = new Date().toLocaleString('en-CA', {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });

    if (editingTask){
      dispatch({
        type: 'UPDATE_TASK', 
        payload: {
          id: editingTask.id, 
          text: taskText, 
          date: currentDate
        }
      });
      setEditingTask(null);
    } else {
      dispatch({
        type: 'ADD_TASK',
        payload: {
          id: Date.now(), 
          text: taskText, 
          completed: false, 
          date: currentDate
        }
      });
    }
    setTaskText('');
  }
  return(
    <>
      <form onSubmit={handleFormSubmit}>
        <input 
          type='text'
          ref={textbox}
          value={taskText}
          onChange={(event) => setTaskText(event.target.value)}
          placeholder={editingTask ? 'Edit task...' : 'Add a new task...'}
          className=''
        />
        <button
          type='submit'
          className=''
        >
          {editingTask ? <FaEdit size={20} /> : <FaPlusSquare size={20} />}
          {editingTask ? 'Update Task' : 'Add Task'} 
        </button>
      </form>
    </>
  );
}

export default TaskForm;