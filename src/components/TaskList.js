import TaskItem from "./TaskItem";

function TaskList( { tasks, dispatch, setEditingTask } ) {
  return(
    tasks.length === 0 ? (
      <p className='no-tasks'>
        No tasks yet!.  You can add one above to get started!
      </p> )
    :
    (
    <div className='tasks'>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          dispatch={dispatch}
          setEditingTask={setEditingTask}
        />
      ))}
    </div> )
  );
}

export default TaskList;