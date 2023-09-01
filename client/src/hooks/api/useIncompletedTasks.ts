import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import type { Task } from "@/types/task";

export function useIncompletedTasks(userId: number) {
  return useQuery({
    queryKey: ["incompleted-tasks-user"],
    queryFn: async () => {
      const { data } = await apiClient.get<Task[]>(
        `tasks/${userId}?completed=false`
      );
      return data;
    },
  });
}
