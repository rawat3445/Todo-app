import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";  // Correct import for addTask
import { v4 as uuidv4 } from "uuid";  // For generating unique IDs

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    // Dispatch addTask action with the task data
    dispatch(addTask({ id: uuidv4(), text: task, completed: false }));
    setTask("");  // Clear input after adding task
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
