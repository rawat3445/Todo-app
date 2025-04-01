import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18+
import { Provider } from "react-redux";
import store from "./redux/store"; // Path to your Redux store
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create root using createRoot
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
