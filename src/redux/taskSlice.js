import { createSlice } from "@reduxjs/toolkit";

// Function to load tasks from local storage
const loadTasksFromStorage = () => {
  const savedTasks = localStorage.getItem("tasks");
  return Array.isArray(JSON.parse(savedTasks)) ? JSON.parse(savedTasks) : [];
};


// Function to save tasks to local storage
const saveTasksToStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const initialState = {
  tasks: loadTasksFromStorage(), // Load tasks from storage on app start
};

const taskSlice = createSlice({

  
  
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      saveTasksToStorage(state.tasks); // Save tasks after adding
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasksToStorage(state.tasks); // Save after removing
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        saveTasksToStorage(state.tasks);
      }
    },

    
    editTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.newText;
        saveTasksToStorage(state.tasks);
      }
    },
  },
  
});

export const { addTask, removeTask, toggleTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
