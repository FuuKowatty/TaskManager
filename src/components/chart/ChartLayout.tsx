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

interface ChartAreaProps {
  children?: React.ReactNode;
  StatsData: StatsData[];
}

export async function ChartAreaLayout({ children, StatsData }: ChartAreaProps) {
  return (
    <div className="relative row-start-2 row-end-7 flex h-full w-full flex-col gap-20 lg:gap-10">
      <Tiles StatsData={StatsData} />
      <div className="relative h-96 w-full lg:h-[65%]">
        {children}
        <ResponsiveContainer>
          <AreaChart data={StatsData}>
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
