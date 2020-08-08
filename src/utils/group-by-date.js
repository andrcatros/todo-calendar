const groupByDate = (tasks) => {
  const array = tasks
    .sort(
      (a, b) =>
        parseInt(a.deadline.slice(0, 11).replace(/\D/g, "")) -
        parseInt(b.deadline.slice(0, 11).replace(/\D/g, ""))
    )
    .reduce((groups, task) => {
      const date = parseInt(task.deadline.slice(0, 11).replace(/\D/g, ""));
      if (!groups[date]) {
        groups[date] = [];
      }

      groups[date].push(task);
      return groups;
    }, {});

  const sortedArray = Object.keys(array)
    .map((date) => {
      return {
        date: date,
        tasks: array[date],
      };
    })
    .sort((a, b) => a.date - b.date);

  return sortedArray;
};

export default groupByDate;
