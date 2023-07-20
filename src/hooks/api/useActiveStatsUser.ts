import { apiClient } from "@/lib/apiClient";
import { getTaskCountPerMonth } from "@/lib/getTaskCountPerMonth";

import { useActiveUserId } from "@/hooks/state/useActiveStatsUser";

export async function useActiveStatsUser() {
  const { activeStatsUserId } = useActiveUserId();

  const completedTasks = activeStatsUserId
    ? await apiClient.get(`getTasks/${activeStatsUserId}?isCompleted=true`)
    : await apiClient.get(`getTasks?isCompleted=true`);

  const StatsData = getTaskCountPerMonth(completedTasks.data);

  return { activeStatsUserId, StatsData };
}
