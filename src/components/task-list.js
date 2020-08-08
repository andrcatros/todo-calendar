import React from "react";
import Task from "./task";
import groupByDate from "../utils/group-by-date";

const TaskList = ({ tasks }) => {
  const tasksArray = groupByDate(tasks);

  return (
    <div className="TaskList" data-testid="task-list-test">
      <h3>Your tasks:</h3>
      {tasksArray.map((taskObj, i) => (
        <Task key={i} date={taskObj.tasks[0].deadline} tasks={taskObj.tasks} />
      ))}
    </div>
  );
};

export default TaskList;
