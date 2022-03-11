import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const DATA = [
  { id: "todo-0", name: "Make to-do list", completed: true },
  { id: "todo-1", name: "Add edit function", completed: false },
  { id: "todo-2", name: "add delete function", completed: false },
];

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));
