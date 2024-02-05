import { getTaskCountPerMonth } from "../../lib/getTaskCountPerMonth";

import type { ChartStat } from "@/types/chartStats";

import { ErrorMessage } from "../form/ErrorMessage";
import { LoadingCharts } from "../ui/LoadingCharts";
import { ChartArea } from "./ChartArea";
import { useActiveStatsTasks } from "@/hooks/api/useActiveStatsUser";
import { filterByCompletedTasks } from "@/lib/filterByCompletedTasks";


export function RenderCharts() {
  const { data, isLoading, error } = useActiveStatsTasks();
  if (isLoading) return <LoadingCharts />;
  if (error) return <ErrorMessage>Could not fetch chart data</ErrorMessage>;
  const taskCountPerMonth = getTaskCountPerMonth(data ? filterByCompletedTasks(data) : []);
  return <ChartArea statsData={taskCountPerMonth as ChartStat[]} />;
}
