const moment = require("moment");

const getActiveTasks = (date, tasks) => {
  return tasks.filter((task) => {
    let d = moment.utc(task.deadline, "YYYY MM DDThh:mm:ssZ");
    console.log(d);
    return moment(d).isSameOrAfter(date);
  });
};

export default getActiveTasks;
