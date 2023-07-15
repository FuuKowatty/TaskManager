import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";

export function useBestEmployees() {
  return useQuery({
    queryKey: ["best employees"],
    queryFn: async () => {
      const { data } = await apiClient.get<UserWithCompletedTasks[]>(
        "/getUsersByTaskCount"
      );
      return data;
    },
  });
}
