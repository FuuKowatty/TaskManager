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

// import { useSession } from "@/state/useSession";

export async function ChartArea() {
  // const { sessionUser } = useSession();

  // if (!sessionUser) {
  //   return null;
  // }

  // const { id } = sessionUser;

  const completedTasks = axios.get(`/api/getTasks/21?isCompleted=true`);
  const StatsData = getTaskCountPerMonth((await completedTasks).data);

  return (
    <div className="relative row-start-2 row-end-7 w-full">
      <div className="h-[40%] w-full">siemka</div>
      <div className="relative h-[60%]">
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
    </div>
  );
}
