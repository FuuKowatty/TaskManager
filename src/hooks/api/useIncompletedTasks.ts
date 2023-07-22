import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

export function useIncompletedTasks(userId: number) {
  return useQuery({
    queryKey: ["incompleted-tasks-user"],
    queryFn: async () => {
      const { data } = await apiClient.get<Task[]>(
        `getIncompletedTasks/${userId}`
      );
      return data;
    },
  });
}
