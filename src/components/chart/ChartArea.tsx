import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";


import type { ChartStat } from "@/types/chartStats";

import { SelectUserInput } from "./SelectUserInput";
import { Tiles } from "../tiles/Tiles";
import { useSession } from "@/hooks/state/useSession";
import { Role } from "@/types/users";

export function ChartArea({ statsData }: { statsData: ChartStat[] }) {

  const { sessionUser: {role}} = useSession();

  return (
    <section className="relative row-start-2 row-end-7 flex h-full w-full flex-col gap-20 lg:gap-10">
      {statsData.length && <Tiles statsData={statsData} />}
      <div className="relative h-96 w-full lg:h-[65%]">
        <div className="absolute right-0 top-[-40px]">
          {role !== Role.employee ? <SelectUserInput /> :  ""}
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
    </section>
  );
}
