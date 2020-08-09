import React from "react";
import TaskList from "../components/task-list";
import Calendar from "../components/calendar";

import { tasks } from "../data/todo.json";

const Main = (props) => {
  return (
    <div
      className="Main"
      style={{ display: "flex", flexDirection: "row-reverse" }}
    >
      <TaskList tasks={tasks} />
      <Calendar />
    </div>
  );
};

export default Main;
