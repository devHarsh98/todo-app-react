import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editTaskIndex, setEditTaskIndex] = useState(null);

  const addTask = () => {
    if (task.trim() === "") {
      return;
    }
    const updateTaskList = [...taskList, task];
    setTaskList(updateTaskList);
    setTask("");
  };

  const removeTask = (index) => {
    const updateTaskList = taskList.filter(
      (_, taskIndex) => taskIndex !== index
    );
    setTaskList(updateTaskList);
  };

  const editTask = (index) => {
    setEditTaskIndex(index);
    setTask(taskList[index]);
  };

  const updateTask = () => {
    const updateTaskList = [...taskList];
    updateTaskList[editTaskIndex] = task;
    setTaskList(updateTaskList);
    setEditTaskIndex(null);
    setTask("");
  };

  return (
    <>
      <div className="bg-slate-300 flex flex-col justify-start items-center w-full lg:w-4/5 xl:w-3/4 max-w-screen-lg mx-auto mt-5 mb-5">
        <h1 className="text-4xl bg-blue-500 font-bold text-white w-full text-center p-4">
          My Todo List
        </h1>
        <div className="flex w-full justify-evenly">
          <input
            type="text"
            placeholder="Add list here..."
            className="text-2xl rounded-md p-4 w-full m-5 outline-none focus:border-2 focus:border-blue-500"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            onClick={editTaskIndex === null ? addTask : updateTask}
            className="text-2xl font-bold bg-orange-400 text-white pl-5 pr-5 rounded-md m-5 hover:bg-orange-600"
          >
            {editTaskIndex == null ? "Add" : "Update"}
          </button>
        </div>
        <p className="text-2xl">Here is your list 🔥</p>
        {taskList.length === 0 ? (
          <p className="text-2xl mt-2 mb-4">Your task list is empty. 👋</p>
        ) : (
          taskList.map((task, index) => {
            return (
              <div key={index} className="flex w-full justify-between m-2">
                <input
                  type="text"
                  value={task}
                  className="text-2xl p-2 rounded-md ml-3 w-full text-justify outline-none"
                  readOnly={index !== editTaskIndex}
                />
                <button
                  onClick={() => removeTask(index)}
                  className="text-2xl font-bold bg-orange-400 text-white pl-5 pr-5 rounded-md ml-2 mr-2 hover:bg-orange-600"
                >
                  Remove
                </button>
                <button
                  onClick={() => editTask(index)}
                  className="text-2xl font-bold bg-orange-400 text-white pl-5 pr-5 rounded-md ml-2 mr-2 hover:bg-orange-600"
                >
                  Edit
                </button>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default App;
