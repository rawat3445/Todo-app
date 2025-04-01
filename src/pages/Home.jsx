import React from "react";
import TaskInput from "../Components/TaskInput";
import TaskList from "../Components/TaskList";

const Home = () => {
  return (
    <div>
      <h1>To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Home;
