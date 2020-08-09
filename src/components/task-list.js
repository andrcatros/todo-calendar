import React from "react";
import Task from "./task";
import groupByDate from "../utils/group-by-date";

const TaskList = ({ tasks }) => {
  const tasksArray = groupByDate(tasks);

  return (
    <div
      className="TaskList"
      data-testid="task-list-test"
      style={{
        margin: "0px 2px 0px 20px",
        paddingLeft: "20px",
        paddingRight: "10px",
        borderStyle: "solid",
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
