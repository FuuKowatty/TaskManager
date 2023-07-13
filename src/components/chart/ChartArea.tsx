"use client";

import { useActiveStatsUser } from "@/hooks/api/useActiveStatsUser";

import { ChartAreaLayout } from "./ChartLayout";

export async function ChartArea() {
  const data = await useActiveStatsUser();
  const { StatsData } = data;

  return <ChartAreaLayout StatsData={StatsData} />;
}
