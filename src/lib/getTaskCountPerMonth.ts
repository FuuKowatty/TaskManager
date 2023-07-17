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
];

export function getTaskCountPerMonth(tasks: Task[]) {
  const currentYear = String(new Date().getFullYear());
  const actuallYearTasks = tasks.filter((task) =>
    task.endDate.toString().includes(currentYear)
  );
  const filteredTasks = filterCurrentYear(actuallYearTasks);
  const taskCountByMonth = getTasksPerMonth(filteredTasks);
  const taskCountPerMonth = [];
  for (const monthName of monthNames) {
    const taskCount = taskCountByMonth[monthName] || 0;
    taskCountPerMonth.push({ monthName, taskCount });
  }

  sortByMonthOrder(taskCountPerMonth);

  return taskCountPerMonth;
}

function filterCurrentYear(tasks: Task[]) {
  const currentYear = new Date().getFullYear();
  const currentYearTasks = tasks.filter((task) => {
    const endDate = new Date(task.endDate);
    return endDate.getFullYear() === currentYear;
  });

  return currentYearTasks;
}

function getTasksPerMonth(filteredTasks: Task[]): { [month: string]: number } {
  const taskCountByMonth: { [month: string]: number } = {};

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
  ];

  monthNames.forEach((monthName) => {
    taskCountByMonth[monthName] = 0;
  });

  filteredTasks.forEach((task: Task) => {
    const endDate = new Date(task.endDate);
    const monthName = endDate.toLocaleString("default", { month: "long" });

    taskCountByMonth[monthName]++;
  });

  return taskCountByMonth;
}

function sortByMonthOrder(
  taskCountPerMonth: { monthName: string; taskCount: number }[]
) {
  const sortedTaskCountPerMonth = taskCountPerMonth;

  sortedTaskCountPerMonth.sort((a, b) => {
    const aIndex = monthNames.indexOf(a.monthName);
    const bIndex = monthNames.indexOf(b.monthName);
    return aIndex - bIndex;
  });

  return sortedTaskCountPerMonth;
}
