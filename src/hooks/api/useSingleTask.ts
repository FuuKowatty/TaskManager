import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import type { Task } from "@/types/task";

export function useSingleTask(taskId: number) {
  return useQuery({
    queryKey: ["task", taskId],
    queryFn: async (): Promise<Task> => {
      const { data } = await apiClient.get(`/tasks/single/${taskId}`);
      return data;
    },
  });
}
