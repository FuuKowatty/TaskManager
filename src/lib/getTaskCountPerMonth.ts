const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

export function getTaskCountPerMonth(tasks: Task[]) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const sixMonthsAgo = new Date(currentYear, currentMonth - 5, 1); // Calculate date 6 months ago

  const actualYearTasks = tasks.filter(
    (task) => new Date(task.endDate) >= sixMonthsAgo
  );
  const tasksCount = countTaskPerMonth(actualYearTasks);

  const taskCountPerMonth: TaskCountPerMonth[] = [];
  for (let i = 0; i <= 5; i++) {
    const monthDate = new Date(currentYear, currentMonth - i, 1);
    const monthName = monthNames[monthDate.getMonth()];
    const tasksPerMonth = tasksCount[monthName] || 0;
    taskCountPerMonth.push({ monthName, taskCount: tasksPerMonth });
  }
  return taskCountPerMonth.reverse(); // Reverse the array to show data in chronological order
}

function countTaskPerMonth(tasks: Task[]) {
  const tasksByMonth: { [key: string]: number } = {};

  tasks.forEach((task) => {
    const taskDate = new Date(task.endDate);
    const taskMonth = monthNames[taskDate.getMonth()];

    tasksByMonth[taskMonth] = (tasksByMonth[taskMonth] || 0) + 1;
  });

  return tasksByMonth;
}
