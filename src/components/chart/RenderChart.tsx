"use client";

import { useSession } from "@/state/useSession";

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
      <ListTasks userId={sessionUser.id} />
    </>
  ) : (
    <>
      <AdminChartArea />
      <BestEmployess />
    </>
  );
}
