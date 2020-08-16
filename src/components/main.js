import React from "react";
import TaskList from "../components/task-list";
import Calendar from "../components/calendar";

import { tasks } from "../data/todo.json";

const Main = ({ date }) => {
  return (
    <div className="Main" style={{ display: "flex", flexDirection: "row" }}>
      <TaskList date={date} tasks={tasks} />
      <Calendar date={date} />
    </div>
  );
};

export default Main;
