import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTask, removeTask, editTask } from "../redux/taskSlice";

const TaskList = () => {
  const [filter, setFilter] = useState("all"); 
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  
  const filteredTasks = tasks.filter(task => 
    filter === "all" ? true : filter === "completed" ? task.completed : !task.completed
  );

  return (
    <div>
      <h2>Task List</h2>
      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>
      {filteredTasks.length === 0 ? <p>No tasks available</p> : 
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.id} 
                style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.text}
              <button onClick={() => dispatch(toggleTask(task.id))}>Toggle</button>
              <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default TaskList;
