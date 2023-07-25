"use client";

import { getTilesData } from "@/lib/getTilesData";

import type { ChartStats } from "@/types/ChartStats";

import { Tile } from "./Tile";

export function Tiles({ statsData }: { statsData: ChartStats[] }) {
  const { monthRate, currentMonth, Last6MonthsTasksCount } =
    getTilesData(statsData);
  const { icon, difference } = monthRate;
  return (
    <div className="flex h-[30%] items-stretch justify-center gap-6 lg:items-center">
      <Tile>
        <span className="font-golos-text text-3xl font-bold">
          {Last6MonthsTasksCount}
        </span>
        <p>Last 6 Months</p>
      </Tile>
      <Tile>
        <span className="font-golos-text text-3xl font-bold">
          {currentMonth}
        </span>
        <p>This Month</p>
      </Tile>
      <Tile>
        <span
          className={`font-golos-text flex gap-1 text-3xl font-bold ${
            !difference
              ? "text-orange-400"
              : difference > 0
              ? "text-green-400"
              : "text-red-500"
          }`}
        >
          {`${difference}%`} {icon}
        </span>
        <p>than last month</p>
      </Tile>
    </div>
  );
}
