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

interface TaskCountPerMonth {
  monthName: string;
  taskCount: number;
}

export function getTaskCountPerMonth(tasks: Task[]) {
  const currentYear = String(new Date().getFullYear());
  const actuallYearTasks = tasks.filter((task) =>
    task.endDate.toString().includes(currentYear)
  );
  const tasksCount = countTaskPerMonth(actuallYearTasks);

  const taskCountPerMonth: TaskCountPerMonth[] = [];
  for (const monthName of monthNames) {
    const tasksPerMonth = tasksCount[monthName] || 0; // add 0 to month if there were 0 tasks
    taskCountPerMonth.push({ monthName, taskCount: tasksPerMonth });
  }
  return taskCountPerMonth;
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
