import React from "react";
import Task from "./task";

const TaskList = ({ tasks }) => {
  return (
    <div className="TaskList" data-testid="task-list-test">
      {tasks
        .sort(
          (a, b) =>
            parseInt(a.deadline.slice(0, 16).replace(/\D/g, "")) -
            parseInt(b.deadline.slice(0, 16).replace(/\D/g, ""))
        )
        .map((task, i) => (
          <Task
            id={task.id}
            key={task.id}
            description={task.description}
            deadline={task.deadline}
            index={i}
          />
        ))}
    </div>
  );
};

export default TaskList;
