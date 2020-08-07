import React from "react";

const Task = (props) => {
  const { description, deadline } = props;
  return (
    <div className="task">
      {/*  "task:" = description element (input element styled as static)  */}
      <div className="task-description"> task: {description}</div>
      {/* "due:" = deadline element (input element styled as static)  */}
      <div className="task-deadline">due: {deadline} </div>
    </div>
  );
};

export default Task;
