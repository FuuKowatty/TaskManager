import { monthNames } from "@/data/monthNames";
import type { MonthNames } from "@/types/chartStats";
import type { Task } from "@/types/task";

export function getTaskCountPerMonth(tasks: Task[]) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const sixMonthsAgo = new Date(currentYear, currentMonth - 5, 1); // Calculate date 6 months ago

  const actualYearTasks = tasks.filter(
    (task) => new Date(task.endDate) >= sixMonthsAgo
  );
  const tasksCount = countTaskPerMonth(actualYearTasks);
  const taskCountPerMonth = Object.entries(tasksCount).map(
    ([monthName, taskCount]) => ({
      monthName: monthName as MonthNames,
      taskCount,
    })
  );

  const sortedTaskCountPerMonth = taskCountPerMonth.sort(
    (a, b) => monthNames.indexOf(a.monthName) - monthNames.indexOf(b.monthName)
  );

  return sortedTaskCountPerMonth;
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
