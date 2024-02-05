import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

import type { UsersWithCompletedTasks } from "@/types/users";

export function useBestEmployees() {
  return useQuery({
    queryKey: ["best employees"],
    queryFn: async () => {
      const { data } = await apiClient().get<UsersWithCompletedTasks[]>("/api/users/stats/sorted-by-completed-tasks");
      return data;
    },
  });
}
