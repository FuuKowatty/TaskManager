"use client";

import { TfiStatsDown, TfiStatsUp } from "react-icons/tfi";

import type { ChartStats } from "@/types/chartStats";

export function getTilesData(statsData: ChartStats) {
  const Last6MonthsTasksCount = statsData.reduce(
    (acc, v) => acc + v.taskCount,
    0
  );

  const currentMonth = statsData[statsData.length - 1];
  const previousMonth = statsData[statsData.length - 2];

  const monthRate = getMonthRate(
    currentMonth.taskCount,
    previousMonth.taskCount
  );

  return {
    Last6MonthsTasksCount,
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
  }
  if (current > previous) {
    return {
      icon: <TfiStatsUp />,
      difference: getDifference(current, previous),
    };
  }
  return {
    icon: <TfiStatsDown />,
    difference: getDifference(current, previous),
  };
}

function getDifference(current: number, previous: number) {
  if (previous === 0) {
    return 100;
  }
  if (current === 0) {
    return -100;
  }
  const div = current / previous;
  const difference = current > previous ? (div - 1) * 100 : (1 - div) * 100;
  return Number(difference.toFixed(0));
}
