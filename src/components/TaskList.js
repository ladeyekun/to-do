function TaskList({ dispatch, editingTask, setEditingTask }) {
  const[taskText, setTaskText] = useState('');
  return(
    <>
      <form>
        <input 
          type='text'
          value={taskText}
          onChange=''
          placeholder=''
          className=''
        />
        <button
          type='submit'
          className=''
        >
          {editingTask ? <Edit size={20} /> : <PlusCircle size={20} />}
          {editingTask ? 'Update Task' : 'Add Task'} 
        </button>
      </form>
    </>
  );
}

export default TaskList;