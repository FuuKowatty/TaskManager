import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/lib/apiClient";
import { getTaskCountPerMonth } from "@/lib/getTaskCountPerMonth";

import { useActiveUserId } from "@/hooks/state/useActiveStatsUser";

export function useActiveStatsUser() {
  const { activeStatsUserId } = useActiveUserId();

  return useQuery({
    queryKey: ["tasks", activeStatsUserId],
    queryFn: async () => {
      const { data } = await apiClient.get<Task[]>(
        `getTasks${
          activeStatsUserId ? "/" + activeStatsUserId : ""
        }?isCompleted=true`
      );
      return getTaskCountPerMonth(data);
    },
  });
}
