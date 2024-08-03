import React, { useState } from "react";
import deleteIcon from './assets/deleteicon.jpg';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleTitle = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleDelete = (id) => {

    console.log("kounsa task del ho rha:", id);
    const updatedTasks = tasks.filter((_, index) => index !== id);
    console.log("new tasks:", updatedTasks);
    setTasks(updatedTasks);
  };

  const toggleComplete = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle && taskDescription) {
      // const newTask = { title: taskTitle, description: taskDescription };
      const newTask = { title: taskTitle, description: taskDescription, completed: false };
      setTasks([...tasks, newTask]);
      setTaskTitle("");
      setTaskDescription("");
    }
  };


  return (
    <div className=" min-h-screen flex items-center justify-center bg-gray-950">
      <div className="p-4  flex-col w-full max-w-2xl items-center justify-center ">
      <h2 className=" text-center text-white text-3xl font-bold p-10">
        Tasks To be Done
      </h2>
      <div className="p-4 flex flex-col items-center justify-center w-full">
        <form
          action=""
          className="w-full max-w-md flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="flex-grow m-2 p-2 rounded"
            placeholder="Task Title"
            value={taskTitle}
            onChange={handleTitle}
          />
          <input
            type="text"
            name="description"
            id="description"
            className="flex-grow m-2 p-2 rounded"
            placeholder="Task Description"
            value={taskDescription}
            onChange={handleDescription}
          />
          <button
            type="submit"
            className=" text-white bg-lime-400 hover:bg-lime-600 p-2 rounded m-2"
          >
            + Add Task
          </button>
        </form>
      </div>

      <div className=" flex flex-col p-5 bg-zinc-700 text-white rounded w-full">
        <h3 className="text-xl font-bold mb-4">Your Tasks</h3>
        <ul className="w-full">
          {tasks.length === 0 ? (
            <li className="text-center">No Tasks Yet</li>
          ) : (
            tasks.map((task, index) => (
              <div className="flex justify-between items-center my-3 p-2 bg-gray-950 border-2 border-stone-400 rounded">
                
                {/* <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(index)}
                  className='mr-2'
                /> */}

                <button className=" flex items-center text-white p-2 rounded-lg focus:outline-none"
                onClick={() => toggleComplete(index)}>
                  <svg
                            className="mr-2"
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                            fill={task.completed ? "rgb(34, 197, 94)" : "none"}
                            stroke={task.completed ? "white" : "none"}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            >
                    <circle cx="12" cy="12" r="10" stroke={task.completed ? "rgb(34, 197, 94)" : "rgb(34, 197, 94)"}  />
                  </svg>
                
                  
                {/* <li key={index} className="flex-grow"> */}
                <span className={task.completed ? 'line-through' : ''}>
                  {task.title} - {task.description}
                </span>
                </button>
                {/* </li> */}
                
      

                {/* <button
                  className="p-1 text-white bg-red-400 hover:bg-red-700 rounded"
                  // onClick={() => handleDelete(task.title)}
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button> */}


                <button onClick={() => handleDelete(index)}>
                  <img src={deleteIcon}
                      alt="Delete" 
                      width="32" 
                      height="34" />
                </button>

                
              </div>
            ))
          )}
        </ul>
      </div>
      </div>
    </div>
  );
}

export default App;

