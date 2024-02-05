import type { Task } from "@/types/task";
import { apiClient } from "./apiClient";


export function getTasksList(userId: number) {

  const urlEnd = userId ? `/${userId}` : "";

  if(userId) {
    return apiClient().get<Task[]>(`/api/tasks/employee/${userId}`)
  }

  return apiClient().get<Task[]>(`/api/tasks${urlEnd}`);

}