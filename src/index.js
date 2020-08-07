import React from "react";
import ReactDOM from "react-dom";

import "../src/styles/index.css";
import App from "./components/App";

import { tasks } from "../src/data/todo.json";

ReactDOM.render(<App />, document.getElementById("root"));
