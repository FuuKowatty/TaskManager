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
        <ListTasks />
      </div>
    </>
  );
}
