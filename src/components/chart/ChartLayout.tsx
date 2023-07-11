"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Tiles } from "../Tiles";

interface ChartAreaProps {
  children?: React.ReactNode;
  StatsData: StatsData[];
}

export async function ChartAreaLayout({ children, StatsData }: ChartAreaProps) {
  return (
    <div className="relative row-start-2 row-end-7 h-full w-full">
      <div className="flex h-[30%] items-center justify-center gap-6">
        <Tiles StatsData={StatsData} />
      </div>
      <div className="relative h-[70%] w-full">
        {children}
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
