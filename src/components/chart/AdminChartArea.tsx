"use client";

import { useActiveStatsUser } from "@/hooks/useActiveStatsUser";

import { ChartAreaLayout } from "./ChartLayout";
import { SelectUserInput } from "../SelectUserInput";

export async function AdminChartArea() {
  const data = await useActiveStatsUser();
  if (!data) return null;
  const { activeStatsUserId: userId, handleChangeUser, StatsData } = data;

  return (
    <ChartAreaLayout StatsData={StatsData}>
      <div className="absolute right-0 top-[-40px]">
        <SelectUserInput userId={userId} handleChangeUser={handleChangeUser} />
      </div>
    </ChartAreaLayout>
  );
}
