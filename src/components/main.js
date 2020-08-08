import React from "react";
import TaskList from "../components/task-list";

import { tasks } from "../data/todo.json";

const Main = (props) => {
  return (
    <div className="Main">
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Main;
