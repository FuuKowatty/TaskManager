"use client";

import { getTilesData } from "@/lib/getTilesData";

import { Tile } from "./Tile";

export function Tiles({ StatsData }: { StatsData: StatsData[] }) {
  const { monthRate, currentMonth, currentYearTasksCount } =
    getTilesData(StatsData);
  const { icon, difference } = monthRate;
  return (
    <>
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
    </>
  );
}

// const statsListData = [
//     {
//       id: 0,
//       header: "Tasks done",
//     },
//     {
//       id: 1,
//       header: "Better than month ago",
//     },
//     {
//       id: 2,
//       header: "Beers",
//     },
//   ];

// {statsListData.map(({ header, id }) => {
//     return (
//       <article
//         key={id}
//         className="flex flex-col items-center justify-center gap-1  rounded-md bg-gray-200 py-4 text-center w-[160px]"
//       >
//         <span className="font-golos-text text-3xl font-bold">15</span>
//         <p>{header}</p>
//       </article>
//     );
//   })}
