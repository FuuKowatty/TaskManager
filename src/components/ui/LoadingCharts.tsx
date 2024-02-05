import { LoadingSelectChart } from "./LoadingSelectChart";

export function LoadingCharts() {
  return (
    <div className="row-start-2 row-end-7 flex h-full w-full animate-pulse flex-col gap-20 lg:block">
      <div className="flex h-[30%] justify-center gap-6 lg:items-center">
        <div className="h-[100px] w-[160px] rounded-md bg-gray-200 dark:bg-midnightBlue" />
        <div className="h-[100px] w-[160px] rounded-md bg-gray-200 dark:bg-midnightBlue" />
        <div className="h-[100px] w-[160px] rounded-md bg-gray-200 dark:bg-midnightBlue" />
      </div>
      <div className="h-[70%] w-full">
        <LoadingSelectChart />
        <div className="h-[90%] w-full rounded-md bg-gray-200 dark:bg-midnightBlue" />
      </div>
    </div>
  );
}
