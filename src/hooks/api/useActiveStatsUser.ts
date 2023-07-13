import axios from "axios";

import { getTaskCountPerMonth } from "@/lib/getTaskCountPerMonth";

import { useActiveUserId } from "@/state/useActiveStatsUser";

export async function useActiveStatsUser() {
  const { activeStatsUserId, setActiveStatsUserId } = useActiveUserId();

  const handleChangeUser = (id: number) => {
    setActiveStatsUserId(id);
  };

  const completedTasks = await axios.get(
    `/api/getTasks/${activeStatsUserId}?isCompleted=true`
  );
  const StatsData = getTaskCountPerMonth(completedTasks.data);

  return { activeStatsUserId, handleChangeUser, StatsData };
}
