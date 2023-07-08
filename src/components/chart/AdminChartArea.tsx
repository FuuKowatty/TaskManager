"use client";

import axios from "axios";
import { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { getTaskCountPerMonth } from "@/lib/getTaskCountPerMonth";

import { useSession } from "@/state/useSession";

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
    <div className="relative w-full">
      <div className="absolute right-0 top-[-50px]">
        <SelectUserInput userId={userId} handleChangeUser={handleChangeUser} />
      </div>
      <ResponsiveContainer>
        <AreaChart data={StatsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="monthName" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="taskCount"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
