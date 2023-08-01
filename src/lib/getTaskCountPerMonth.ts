import { monthNames } from "@/data/monthNames";
import type { Task } from "@/types/task";

export function getTaskCountPerMonth(tasks: Task[]) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const sixMonthsAgo = new Date(currentYear, currentMonth - 5, 1); // Calculate date 6 months ago

  const lastSixMonthsTasks = tasks.filter(
    (task) => new Date(task.endDate) >= sixMonthsAgo
  );
  const tasksCount = countTaskPerMonth(lastSixMonthsTasks);

  const taskCountPerMonth = [];
  for (let i = 0; i <= 5; i++) {
    const monthDate = new Date(currentYear, currentMonth - i, 1);
    const monthName = monthNames[monthDate.getMonth()];
    const tasksPerMonth = tasksCount[monthName] || 0;
    taskCountPerMonth.push({ monthName, taskCount: tasksPerMonth });
  }

  taskCountPerMonth.sort(
    (a, b) => monthNames.indexOf(a.monthName) - monthNames.indexOf(b.monthName)
  );
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
