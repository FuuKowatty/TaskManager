"use client";

import { getTaskCountPerMonth } from "@/lib/getTaskCountPerMonth";

import { useActiveStatsTasks } from "@/hooks/api/useActiveStatsUser";

import { ChartArea } from "./ChartArea";
import { BestEmployess } from "../BestEmployess";
import { ListTasks } from "../ListTasks";
import { LoadingCharts } from "../ui/LoadingCharts";

interface ChartsProps {
  role: string;
  id: number;
}

export function RenderCharts({ role, id }: ChartsProps) {
  const { data, isLoading, error } = useActiveStatsTasks();

  if (isLoading) return <LoadingCharts />;
  if (error) return <p>could not fetch data </p>;

  const taskCountPerMonth = getTaskCountPerMonth(data ?? []);
  const userTasks = data?.filter((task) => task.userId === id) ?? [];
  return (
    <>
      <ChartArea statsData={taskCountPerMonth} />

      <div className="relative flex h-full w-full flex-col items-center lg:col-start-2 lg:row-span-3 lg:row-start-4  lg:mt-[-60px]">
        {role === "employee" ? (
          <ListTasks userTasks={userTasks} />
        ) : (
          <BestEmployess />
        )}
      </div>
    </>
  );
}
