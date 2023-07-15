import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

export function useUserTasks(userId: number) {
  return useQuery({
    queryKey: ["tasks", userId],
    queryFn: async () => {
      const { data } = await apiClient.get<Task[]>(`getTasks/${userId}`);

      return data;
    },
  });
}
