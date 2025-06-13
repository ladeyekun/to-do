import { FaTrashAlt, FaEdit, FaCheckSquare } from 'react-icons/fa';

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
    <div className={`task-item flex ${task.completed ? 'completed' : ''}`}>
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
            className={`task-item-icon complete ${task.completed ? 'completed' : ''}`}
            onClick={handleToggleComplete}
            title={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
          />
          <FaEdit 
            className='task-item-icon edit'
            onClick={handleEdit}
            title='Edit task'
          />
          <FaTrashAlt 
            className='task-item-icon delete'
            onClick={handleDelete}
            title='Delete task'
          />
        </div>
      </div>
    </div>
  );
}

export default TaskItem;