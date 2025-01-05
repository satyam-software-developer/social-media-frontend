import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client' for React 18+
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { PostsProvider } from "./Context/PostContext";

// Get the root DOM element
const rootElement = document.getElementById("root");

// Create a root instance
const root = ReactDOM.createRoot(rootElement);

// Render the application
root.render(
  <Router>
    <React.StrictMode>
      <PostsProvider>
        <App />
      </PostsProvider>
    </React.StrictMode>
  </Router>
);
