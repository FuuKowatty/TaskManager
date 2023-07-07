// "use client";

import axios from "axios";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { DashboardHeader } from "@/components/DashboardHeader";

import { getTaskCountPerMonth } from "@/lib/getTaskCountPerMonth";

async function getTasks() {
  const { data: tasks }: { data: Task[] } = await axios.get(
    `http://localhost:3000/api/getTasks/21?isCompleted=true`
  );

  const StatsData = getTaskCountPerMonth(tasks);
  return StatsData;
}

export async function AdminView() {
  const StatsData = await getTasks();

  return (
    <>
      <DashboardHeader />
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
          <XAxis dataKey="monthName" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="taskCount"
            strokeWidth={3}
            stroke="rgb(2 6 23)"
            fill="transparent"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="w-full lg:col-start-2 lg:h-[120%]">
        Employees of the month
      </div>
    </>
  );
}
