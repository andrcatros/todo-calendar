const groupByTime = (tasks) => {
  return tasks.sort(
    (a, b) =>
      parseInt(a.deadline.slice(0, 11).replace(/\D/g, "")) -
      parseInt(b.deadline.slice(0, 11).replace(/\D/g, ""))
  );
};

export default groupByTime;
