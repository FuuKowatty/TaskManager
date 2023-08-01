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

import { Tiles } from "@/components/tiles/Tiles";

import type { ChartStats } from "@/types/chartStats";

import { SelectUserInput } from "./SelectUserInput";

export function ChartArea({ statsData }: { statsData: ChartStats }) {
  return (
    <div className="relative row-start-2 row-end-7 flex h-full w-full flex-col gap-20 lg:gap-10">
      {statsData && <Tiles statsData={statsData} />}
      <div className="relative h-96 w-full lg:h-[65%]">
        <div className="absolute right-0 top-[-40px]">
          <SelectUserInput />
        </div>
        <ResponsiveContainer>
          <AreaChart data={statsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="monthName" />
            <YAxis
              type="number"
              tickFormatter={(value) => (Number.isInteger(value) ? value : "")}
              width={20}
            />
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
