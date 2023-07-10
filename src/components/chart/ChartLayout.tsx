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

const statsListData = [
  {
    id: 0,
    header: "Tasks done",
  },
  {
    id: 1,
    header: "Better than month ago",
  },
  {
    id: 2,
    header: "Beers",
  },
];

export async function ChartAreaLayout({ children, StatsData }: ChartAreaProps) {
  return (
    <div className="relative row-start-2 row-end-7 h-full w-full pt-8">
      <div className="flex justify-between gap-6">
        {statsListData.map(({ header, id }) => {
          return (
            <article
              key={id}
              className="flex flex-grow flex-col items-center justify-center gap-1  rounded-lg bg-gray-200 py-2 text-center"
            >
              <span className="font-golos-text text-3xl font-bold">15</span>
              <p>{header}</p>
            </article>
          );
        })}
      </div>
      {children}
      <div className="flex h-[32rem] w-full flex-col justify-between gap-10 pt-4">
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
