import React from "react";
import moment from "moment";

const Task = (props) => {
  const { description, deadline } = props;
  const finalDate = moment(deadline).format("ddd MMM DD YYYY");

  return (
    <>
      {console.log(deadline.slice(0, 16).replace(/\D/g, ""))}
      <div className="task" data-testid={`task-${props.index}`}>
        {/*  "task:" = description element (input element styled as static)  */}
        <div className="task-description"> task: {description}</div>
        {/* "due:" = deadline element (input element styled as static)  */}
        <div className="task-deadline">due: {finalDate} </div>
      </div>
    </>
  );
};

export default Task;
