import { useActiveStatsUser } from "@/hooks/api/useActiveStatsUser";

import { ChartAreaLayout } from "./ChartLayout";
import { SelectUserInput } from "./SelectUserInput";

export async function AdminChartArea() {
  const data = await useActiveStatsUser();

  if (!data) return null;

  const { activeStatsUserId: userId, StatsData } = data;

  return (
    <ChartAreaLayout StatsData={StatsData}>
      <div className="absolute right-0 top-[-40px]">
        <SelectUserInput userId={userId} />
      </div>
    </ChartAreaLayout>
  );
}
