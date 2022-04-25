import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PebbleQuizProvider } from "./Context/PebbleQuizProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PebbleQuizProvider>
      <App />
    </PebbleQuizProvider>
  </React.StrictMode>
);
