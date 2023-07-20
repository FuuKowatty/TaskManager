"use client";

import { useSession } from "@/hooks/state/useSession";

import { AdminChartArea } from "./AdminChartArea";
import { ChartArea } from "./ChartArea";
import { BestEmployess } from "../BestEmployess";
import { ListTasks } from "../ListTasks";

export async function Charts() {
  const { sessionUser } = useSession();

  if (!sessionUser.isLogged) return null;

  return sessionUser.role === "employee" ? (
    <>
      <ChartArea />
      <div className="relative flex h-full w-full flex-col items-center lg:col-start-2 lg:row-span-3 lg:row-start-4  lg:mt-[-60px]">
        <ListTasks />
      </div>
    </>
  ) : (
    <>
      <AdminChartArea />
      <div className="flex h-full w-full flex-col items-center lg:col-start-2 lg:row-span-3 lg:row-start-4  lg:mt-[-60px]">
        <BestEmployess />
      </div>
    </>
  );
}
