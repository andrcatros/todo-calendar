import React from "react";
import Task from "./task";

const TaskList = (props) => {
  return (
    <div className="TaskList">
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          description={task.description}
          deadline={task.deadline}
        />
      ))}
    </div>
  );
};

export default TaskList;
