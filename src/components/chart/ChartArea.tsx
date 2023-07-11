"use client";

import { useActiveStatsUser } from "@/hooks/useActiveStatsUser";

import { ChartAreaLayout } from "./ChartLayout";

export async function ChartArea() {
  const data = await useActiveStatsUser();
  if (!data) return null;
  const { StatsData } = data;

  return <ChartAreaLayout StatsData={StatsData} />;
}
