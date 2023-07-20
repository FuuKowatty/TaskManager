import { useActiveStatsUser } from "@/hooks/api/useActiveStatsUser";

import { ChartAreaLayout } from "./ChartLayout";
import { SelectUserInput } from "./SelectUserInput";

export async function AdminChartArea() {
  const data = await useActiveStatsUser(); // usun ze zwraca activestatsuserid

  if (!data) return null;

  const { StatsData } = data;

  return (
    <ChartAreaLayout StatsData={StatsData}>
      <div className="absolute right-0 top-[-40px]">
        <SelectUserInput />
      </div>
    </ChartAreaLayout>
  );
}
