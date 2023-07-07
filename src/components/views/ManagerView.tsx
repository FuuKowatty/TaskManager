// "use client";

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

import { DashboardHeader } from "@/components/DashboardHeader";

import { getTaskCountPerMonth } from "@/lib/getTaskCountPerMonth";

async function getTasks() {
  const { data: tasks }: { data: Task[] } = await axios.get(
    `http://localhost:3000/api/getTasks/21?isCompleted=true`
  );

  const StatsData = getTaskCountPerMonth(tasks);
  return StatsData;
}

export async function ManagerView() {
  // const StatsData = await getTasks();
  const StatsData = [
    { piwo: 10, wodka: 20 },
    { piwo: 10, wodka: 20 },
    { piwo: 10, wodka: 20 },
    { piwo: 10, wodka: 20 },
  ];

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
      <div className="w-full lg:col-start-2 lg:h-[120%]">
        Employees of the month
      </div>
    </>
  );
}
