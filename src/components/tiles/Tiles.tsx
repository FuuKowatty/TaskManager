"use client";

import { getTilesData } from "@/lib/getTilesData";

import { Tile } from "./Tile";

export function Tiles({ StatsData }: { StatsData: StatsData[] }) {
  const { monthRate, currentMonth, currentYearTasksCount } =
    getTilesData(StatsData);
  const { icon, difference } = monthRate;
  return (
    <div className="flex h-[30%] items-stretch justify-center gap-6 lg:items-center">
      <Tile>
        <span className="font-golos-text text-3xl font-bold">
          {currentYearTasksCount}
        </span>
        <p>Anually</p>
      </Tile>
      <Tile>
        <span className="font-golos-text text-3xl font-bold">
          {currentMonth}
        </span>
        <p>Monthly</p>
      </Tile>
      <Tile>
        <span
          className={`flex gap-1 font-golos-text text-3xl font-bold ${
            !difference
              ? "text-orange-400"
              : difference > 0
              ? "text-green-400"
              : "text-red-500"
          }`}
        >
          {`${difference}%`} {icon}
        </span>
      </Tile>
    </div>
  );
}
