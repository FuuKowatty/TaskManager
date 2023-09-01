import type { Task } from "@/types/task";

import { apiClient } from "./apiClient";

export function getTasksList(userId: number, isCompleted?: boolean) {
  const urlEnd = userId ? `/${userId}` : "";
  const isCompletedParam = isCompleted ? `?completed=${isCompleted}` : "";
  return apiClient.get<Task[]>(`tasks${urlEnd}${isCompletedParam}`);
}
