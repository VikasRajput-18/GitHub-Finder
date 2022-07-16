import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GitHubFinderProvider } from "./Context/Github/GithubContext";
import { AlertProvider } from "./Context/alert/AlertContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GitHubFinderProvider>
    <AlertProvider>
      <App />
    </AlertProvider>
  </GitHubFinderProvider>
);
