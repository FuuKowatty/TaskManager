import { useQuery } from "@tanstack/react-query";

import { getTasksList } from "@/lib/getTasksList";

import { useActiveUserId } from "../state/useActiveStatsUser";

export function useActiveStatsTasks() {
  const { activeStatsUserId } = useActiveUserId();
  return useQuery({
    queryKey: ["tasks", activeStatsUserId],
    queryFn: async () => {
      const { data } = await getTasksList(activeStatsUserId);
      return data;
    },
  });
}
