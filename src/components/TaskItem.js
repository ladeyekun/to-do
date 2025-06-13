import { FaTrash, FaEdit, FaCheckSquare } from 'react-icons/fa';

function TaskItem( { task, dispatch, setEditingTask } ) {

  const handleToggleComplete = () => {
    dispatch({ type: 'TOGGLE_COMPLETE', payload: task.id });
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TASK', payload: task.id });
  };

  const handleEdit = () => {
    setEditingTask(task);
  };


  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className='task-item-text'>
        <p>
          {task.text}
        </p>
      </div>
      <div className='task-item-bottom flex flex-between'>
        <div className="task-item-date">
          <p>{task.date}</p>
        </div>
        <div className='task-item-icons flex'>
          <FaCheckSquare 
            class='task-item-icon'
            onClick={handleToggleComplete}
            title={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
          />
          <FaEdit 
            class='task-item-icon'
            onClick={handleEdit}
            title='Edit task'
          />
          <FaTrash 
            class='task-item-icon'
            onClick={handleDelete}
            title='Delete task'
          />
        </div>
      </div>
    </div>
  );
}

export default TaskItem;