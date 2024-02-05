import { monthNames } from "../data/monthNames";
import type { Task } from "@/types/task";

export function getTaskCountPerMonth(completedTasks: Task[]) {
  const lastXMonths = getLastXMonths(6);
  const countTasksFromLastXMonths = lastXMonths.map(monthName => {
    const numberOfTasksOfThisMonth = completedTasks.filter(task => {
      if(monthNames[new Date(task.completedAt as string).getMonth()] === monthName) {
        return true;
      }
      return false;
    }) 
    return {[monthName] : numberOfTasksOfThisMonth.length}
  })

  const taskAndMonthNameFromLastXMonths = countTasksFromLastXMonths.map(obj => {
    for (const [key, value] of Object.entries(obj)) {
      return {
        monthName: key,
        taskCount: value
      }
    }
  })

  return taskAndMonthNameFromLastXMonths

}


function getLastXMonths(lastMonths: number) {
  const result = [];
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  for(let i = 0; i<lastMonths; i++) {
    const currentDate = new Date(currentYear, currentMonth - i, 1).getMonth();
    result.push(monthNames[currentDate]);
  }
  return result.reverse();
}