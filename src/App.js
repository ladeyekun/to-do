import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useState, useReducer, useEffect } from 'react';
import Header from './components/Header';

function reducer(state, action){
  switch(action.type){
    case 'ADD_TASK':
      return [...state, action.payload];
    case 'UPDATE_TASK':
      return state.map(task => 
        task.id === action.payload.id ? 
        {...task, text:action.payload.text, date:action.payload.date } : 
        task);
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.payload);
    case 'TOGGLE_COMPLETE':
      return state.map(task => 
        task.id === action.payload ? 
        {...task, completed: !task.completed } : 
        task);
    case 'SET_TASKS':
      return action.payload
    default:
      return state;
  }
}

function App() {
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const [tasks, dispatch] = useReducer(reducer, initialTasks);

  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <section className='form flex flex-center'>
            <div>
              <TaskForm 
                dispatch={dispatch} 
                editingTask={editingTask}
                setEditingTask={setEditingTask}
              />
            </div>
          </section>
          <section>
            <div>
              <TaskList
                tasks={tasks}
                dispatch={dispatch}
                setEditingTask={setEditingTask}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
