import React, { useState } from "react";

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
    // unique id for the task should be Added because
    // abhi jitne bhee task same title ke hai vo eksaath delete ho rhe

    // console.log("kounsa task del ho rha:", id);
    // const updatedTasks = tasks.filter((task) => task.title !== id);
    // console.log("new tasks:", updatedTasks);
    // setTasks(updatedTasks);

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
    <div className=" h-screen bg-zinc-800 m-0 p-0">
      <h2 className="text-center text-white text-3xl font-bold p-10">
        Tasks To be Done
      </h2>
      <div className="flex flex-col items-center justify-center">
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
            className=" text-white bg-green-500 hover:bg-green-700 p-2 rounded m-2"
          >
            + Add Task
          </button>
        </form>
      </div>

      <div className=" m-10 p-5 bg-zinc-700 text-white rounded">
        <h3 className="text-xl font-bold mb-4">Your Tasks</h3>
        <ul>
          {tasks.length === 0 ? (
            <li>No Tasks Yet</li>
          ) : (
            tasks.map((task, index) => (
              <div className="flex justify-between items-center p-2 bg-zinc-600 mt-2 rounded">
                {/* <span className=" bg-zinc-600 rounded"> */}
                <li key={index} className="flex-grow">
                <span className={task.completed ? 'line-through' : ''}>
                  {task.title} - {task.description}
                </span>
                </li>
                {/* </span> */}

                {/* <div className="text-white bg-red-400 hover:bg-red-700 rounded"> */}

                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(index)}
                  className='mr-2'
                />

                <button
                  className="p-1 text-white bg-red-400 hover:bg-red-700 rounded"
                  // onClick={() => handleDelete(task.title)}
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
                {/* </div> */}
              </div>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
