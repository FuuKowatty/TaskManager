import { LoadingCharts } from "./LoadingCharts";
import { LoadingEmployeesContent } from "./LoadingEmployeesContent";

export default function LoadingHomePage() {
  return (
    <main className="lg:grid-cols-1FR340PX flex w-full  animate-pulse flex-col justify-items-center gap-5 text-black lg:grid lg:grid-rows-6 lg:gap-x-4 lg:overflow-hidden">
      <div
        role="status"
        className="h-[160px] w-[596px] rounded-md bg-gray-200 dark:bg-midnightBlue"
      />
      <div className="flex items-start lg:col-start-2 lg:row-span-3 lg:row-start-1">
        <div className="h-[374px] w-[340px] rounded-md bg-gray-200 dark:bg-midnightBlue" />
      </div>
      <LoadingCharts />
      <LoadingEmployeesContent />
    </main>
  );
}
