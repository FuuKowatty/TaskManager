import { Task, TaskStatus } from "@/types/task";

export const filterByCompletedTasks = (tasks: Task[]) => {
    return tasks.filter(task => task.status === TaskStatus.completed)
}