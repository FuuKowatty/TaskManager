"use client";

import dynamic from "next/dynamic";

import { getTaskCountPerMonth } from "@/lib/getTaskCountPerMonth";

import { useActiveStatsTasks } from "@/hooks/api/useActiveStatsUser";
import type { ChartStats } from "@/types/chartStats";

import { ErrorMessage } from "../form/ErrorMessage";
import { LoadingCharts } from "../ui/LoadingCharts";

const DynamiChartArea = dynamic(
  () => import("@/components/chart/ChartArea").then((m) => m.ChartArea),
  { loading: () => <LoadingCharts /> }
);

export function RenderCharts() {
  const { data, status } = useActiveStatsTasks();
  if (status === "loading") return <LoadingCharts />;
  if (status === "error")
    return <ErrorMessage>Could not fetch chart data</ErrorMessage>;

  const taskCountPerMonth = getTaskCountPerMonth(data);
  return <DynamiChartArea statsData={taskCountPerMonth as ChartStats} />;
}
