import { configureStore, combineReducers } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: taskReducer,  // Make sure taskReducer is used for tasks
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true, // Enables Redux DevTools
});

export default store;
