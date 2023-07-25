import type { Task } from "@/types/task";

import { apiClient } from "./apiClient";

export function getTasksList(filterType: number, isCompleted?: boolean) {
  const urlEnd = filterType ? `/${filterType}` : "";
  const isCompletedParam = isCompleted ? `?isCompleted=${isCompleted}` : "";
  return apiClient.get<Task[]>(`getTasks${urlEnd}${isCompletedParam}`);
}
