export function getTaskCountPerMonth(tasks: Task[]) {
  const filteredTasks = filterCurrentYear(tasks);
  const taskCountByMonth = getTasksPerMonth(filteredTasks);
  const taskCountPerMonth = Object.entries(taskCountByMonth).map(
    ([monthName, taskCount]) => ({
      monthName,
      taskCount,
    })
  );
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

  filteredTasks.forEach((task: Task) => {
    const endDate = new Date(task.endDate);
    const monthName = endDate.toLocaleString("default", { month: "long" });

    if (!taskCountByMonth[monthName]) {
      taskCountByMonth[monthName] = 0;
    }

    taskCountByMonth[monthName]++;
  });

  return taskCountByMonth;
}

function sortByMonthOrder(
  taskCountPerMonth: { monthName: string; taskCount: number }[]
) {
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

  const sortedTaskCountPerMonth = taskCountPerMonth;

  sortedTaskCountPerMonth.sort((a, b) => {
    const aIndex = monthNames.indexOf(a.monthName);
    const bIndex = monthNames.indexOf(b.monthName);
    return aIndex - bIndex;
  });

  return sortedTaskCountPerMonth;
}
