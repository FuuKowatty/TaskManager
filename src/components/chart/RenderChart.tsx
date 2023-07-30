"use client";

import { getTaskCountPerMonth } from "@/lib/getTaskCountPerMonth";

import { useActiveStatsTasks } from "@/hooks/api/useActiveStatsUser";

import { ChartArea } from "./ChartArea";
import { ErrorMessage } from "../form/ErrorMessage";
import { LoadingCharts } from "../ui/LoadingCharts";

export function RenderCharts() {
  const { data, isLoading, error } = useActiveStatsTasks();
  if (isLoading) return <LoadingCharts />;
  if (error) return <ErrorMessage error="Could not fetch chart data" />;
  if (!data) return null;

  const taskCountPerMonth = getTaskCountPerMonth(data);
  return <ChartArea statsData={taskCountPerMonth} />;
}
