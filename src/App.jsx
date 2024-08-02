import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleTitle = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle && taskDescription) {
      const newTask = { title: taskTitle, description: taskDescription };
      setTasks([...tasks, newTask]);
      setTaskTitle('');
      setTaskDescription('');
    }
  };

  return (
    <div className='h-screen bg-zinc-800 p-0 m-0'>
      <h2 className='text-center text-white text-3xl font-bold p-10'>Tasks To be Done</h2>
      <form action="" className='flex justify-center items-center' onSubmit={handleSubmit}>
        <input
          type="text"
          className='m-2 p-2 rounded'
          placeholder='Task Title'
          value={taskTitle}
          onChange={handleTitle}
        />
        <input
          type="text"
          name="description"
          id="description"
          className='m-2 p-2 rounded'
          placeholder='Task Description'
          value={taskDescription}
          onChange={handleDescription}
        />
        <button
          type="submit"
          className='text-white bg-green-500 hover:bg-green-700 p-2 rounded m-2'
        >
          + Add Task
        </button>
      </form>

      <div className='mt-10 p-5 bg-zinc-700 text-white rounded'>
        <h3 className='text-xl font-bold mb-4'>Your Tasks</h3>
        <ul>
          {tasks.length === 0 ? (
            <li>No Tasks Yet</li>
          ) : (
            tasks.map((task, index) => (
              <li key={index} className='p-2 bg-zinc-600 mt-2 rounded'>
                {task.title} - {task.description}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
