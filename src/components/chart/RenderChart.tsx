"use client";

import { useActiveStatsUser } from "@/hooks/api/useActiveStatsUser";

import { ChartArea } from "./ChartArea";
import { BestEmployess } from "../BestEmployess";
import { ListTasks } from "../ListTasks";
import { LoadingCharts } from "../ui/LoadingCharts";

interface ChartsProps {
  role: string;
  id: number;
}

export function RenderCharts({ role, id }: ChartsProps) {
  const { data: statsData, isLoading, error } = useActiveStatsUser();

  if (isLoading) return <LoadingCharts />;
  if (error) return <p>could not fetch data </p>;

  return (
    <>
      <ChartArea statsData={statsData} />
      {role === "employee" ? (
        <div className="relative flex h-full w-full flex-col items-center lg:col-start-2 lg:row-span-3 lg:row-start-4  lg:mt-[-60px]">
          <ListTasks userId={id} />
        </div>
      ) : (
        <div className="flex h-full w-full flex-col items-center lg:col-start-2 lg:row-span-3 lg:row-start-4  lg:mt-[-60px]">
          <BestEmployess />
        </div>
      )}
    </>
  );
}
