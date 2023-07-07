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
import { ListTasks } from "@/components/ListTasks";

export function EmployeeView() {
  const StatsData = [
    { MonthName: "siema", taskCount: 20 },
    { MonthName: "siema1", taskCount: 2220 },
    { MonthName: "siema2", taskCount: 3320 },
    { MonthName: "siema3", taskCount: 4520 },
  ];

  return (
    <>
      <DashboardHeader />
      <div className="w-full">
        <ResponsiveContainer>
          <AreaChart data={StatsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="MonthName" />
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
      <ListTasks />
    </>
  );
}
