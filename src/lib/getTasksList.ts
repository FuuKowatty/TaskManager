import { apiClient } from "./apiClient";

export function getTasksList(filterType: number) {
  const urlEnd = filterType ? `/${filterType ?? ""}` : "";
  return apiClient.get<Task[]>(`getTasks${urlEnd}`);
}
