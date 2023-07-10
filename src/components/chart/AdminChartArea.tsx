"use client";

import axios from "axios";
import { useState } from "react";

import { getTaskCountPerMonth } from "@/lib/getTaskCountPerMonth";

import { useSession } from "@/state/useSession";

import { ChartAreaLayout } from "./ChartLayout";
import { SelectUserInput } from "../SelectUserInput";

export async function AdminChartArea() {
  const { sessionUser } = useSession();
  const [userId, setUserId] = useState(sessionUser?.id);
  if (!userId) {
    return null;
  }

  const handleChangeUser = (id: number) => {
    setUserId(id);
  };

  const completedTasks = axios.get(`/api/getTasks/${userId}?isCompleted=true`);
  const StatsData = getTaskCountPerMonth((await completedTasks).data);

  return (
    <ChartAreaLayout StatsData={StatsData} userId={userId}>
      <div className="my-4 ml-auto w-max">
        <SelectUserInput userId={userId} handleChangeUser={handleChangeUser} />
      </div>
    </ChartAreaLayout>
  );
}
