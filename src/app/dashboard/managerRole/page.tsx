"use client";

import axios from "axios";

import { getTaskCountPerMonth } from "@/lib/getTaskCountPerMonth";

import { useSession } from "@/state/useSession";

export default async function ManagerRoleView() {
  const { sessionUser } = useSession();
  const { data: tasks }: { data: Task[] } = await axios.get(
    `/api/getTasks/${sessionUser?.id}`
  );

  const StatsData = getTaskCountPerMonth(tasks);

  console.log(StatsData);

  return <></>;
}
