import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";
import { Task } from "@/types/task";

export function useEmployeeTasks(userId: number) {
  return useQuery({
    queryKey: ["team"],
    queryFn: async () => {
      const { data } = await apiClient().get<Task[]>(`/api/tasks/employee/${userId}`);
      return data;
    },
  });
}