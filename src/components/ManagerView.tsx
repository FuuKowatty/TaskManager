"use client";

import axios from "axios";
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

export default async function ManagerRoleView() {
  const { data: tasks }: { data: Task[] } = await axios.get(
    `/api/getTasks/21?isCompleted=true`
  );

  const StatsData = getTaskCountPerMonth(tasks);

  console.log(StatsData);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={StatsData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
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
  );
}
