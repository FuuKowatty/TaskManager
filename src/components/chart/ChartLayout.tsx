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

interface ChartAreaProps {
  children?: React.ReactNode;
  StatsData: {
    monthName: string;
    taskCount: number;
  }[];
  userId: number;
}

export async function ChartAreaLayout({ children, StatsData }: ChartAreaProps) {
  return (
    <div className="relative row-start-2 row-end-7 w-full">
      <div className="h-[40%] w-full"></div>
      <div className="relative h-[60%]">
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
