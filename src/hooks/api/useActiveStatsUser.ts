import { apiClient } from "@/lib/apiClient";
import { getTaskCountPerMonth } from "@/lib/getTaskCountPerMonth";

import { useActiveUserId } from "@/state/useActiveStatsUser";

export async function useActiveStatsUser() {
  const { activeStatsUserId } = useActiveUserId();

  if (!activeStatsUserId) return null;

  const completedTasks = await apiClient.get(
    `getTasks/${activeStatsUserId}?isCompleted=true`
  );
  const StatsData = getTaskCountPerMonth(completedTasks.data);

  return { activeStatsUserId, StatsData };
}
