import React from "react";
import Task from "./task";

import groupByDate from "../utils/group-by-date";
import getActiveTasks from "./getActiveTasks";

const TaskList = ({ date, tasks }) => {
  const first = getActiveTasks(date, tasks);
  const tasksArray = groupByDate(first);

  return (
    <div
      className="TaskList"
      data-testid="task-list-test"
      style={{
        margin: "0px 2px 0px 20px",
        paddingLeft: "20px",
        paddingRight: "10px",
        borderStyle: "solid",
        width: "20%",
      }}
    >
      <h3>Upcoming:</h3>
      {tasksArray.map((taskObj, i) => (
        <Task key={i} date={taskObj.tasks[0].deadline} tasks={taskObj.tasks} />
      ))}
    </div>
  );
};

export default TaskList;
