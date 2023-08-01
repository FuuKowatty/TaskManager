"use client";

import { getTaskCountPerMonth } from "@/lib/getTaskCountPerMonth";

import { useActiveStatsTasks } from "@/hooks/api/useActiveStatsUser";
import type { ChartStats } from "@/types/chartStats";

import { ChartArea } from "./ChartArea";
import { ErrorMessage } from "../form/ErrorMessage";
import { LoadingCharts } from "../ui/LoadingCharts";

export function RenderCharts() {
  const { data, status } = useActiveStatsTasks();
  if (status === "loading") return <LoadingCharts />;
  if (status === "error")
    return <ErrorMessage error="Could not fetch chart data" />;

  const taskCountPerMonth = getTaskCountPerMonth(data);
  return <ChartArea statsData={taskCountPerMonth as ChartStats} />;
}
