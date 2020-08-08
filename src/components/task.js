import React from "react";
import moment from "moment";
import groupByTime from "../utils/group-by-time";

const Task = (props) => {
  const { tasks, date } = props;
  const finalDate = moment(date).format("ddd MMM DD YYYY");

  return (
    <div className="task" data-testid={`task-${props.index}`}>
      <div className="task-deadline">
        <b> {finalDate} </b>{" "}
      </div>
      <div className="task-description" style={{ whiteSpace: "pre-wrap" }}>
        {" "}
        {tasks.map(
          (task) => `${task.deadline.slice(11, 16)}
           ${task.description} \n`
        )}
      </div>
    </div>
  );
};

export default Task;
