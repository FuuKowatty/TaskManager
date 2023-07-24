"use client";

import { TfiStatsDown, TfiStatsUp } from "react-icons/tfi";

export function getTilesData(statsData: StatsData[]) {
  const currentDate = new Date();

  const currentMonthNumber = currentDate.getMonth();

  const currentYearTasksCount = statsData.reduce(
    (acc, v) => acc + v.taskCount,
    0
  );
  const previousMonth = statsData[currentMonthNumber - 1];
  const currentMonth = statsData[currentMonthNumber];

  const monthRate = getMonthRate(
    currentMonth.taskCount,
    previousMonth.taskCount
  );

  return {
    currentYearTasksCount,
    currentMonth: currentMonth.taskCount,
    monthRate,
  };
}

function getMonthRate(current: number, previous: number) {
  if ((current === 0 && previous === 0) || current === previous) {
    return {
      icon: null,
      difference: 0,
    };
  } else if (current > previous) {
    return {
      icon: <TfiStatsUp />,
      difference: getDifference(current, previous),
    };
  } else {
    return {
      icon: <TfiStatsDown />,
      difference: getDifference(current, previous),
    };
  }
}

function getDifference(current: number, previous: number) {
  if (previous === 0) {
    return 100;
  } else if (current === 0) {
    return -100;
  }
  const div = current / previous;
  const difference = current > previous ? (div - 1) * 100 : (1 - div) * 100;
  return Number(difference.toFixed(0));
}
