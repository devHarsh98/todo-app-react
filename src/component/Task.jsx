import React from "react";

const Task = ({task, index}) => {
    // const removeTask = (index) => {
    //     const updateList = taskList.filter((task, taskIndex) =>  taskIndex !== index);
    //     setTaskList(updateList);
    // }
  return (
    <>
          <div key={index} className="flex w-full justify-between m-2">
            <input
              type="text"
              value={task}
              className="text-2xl p-2 rounded-md ml-3 w-full text-justify outline-none"
            />
            <button onClick={() => removeTask(index)} className="text-2xl font-bold bg-orange-400 text-white pl-5 pr-5 rounded-md ml-2 mr-2 hover:bg-orange-600">
              Remove
            </button>
          </div>
    </>
  );
};

export default Task;
