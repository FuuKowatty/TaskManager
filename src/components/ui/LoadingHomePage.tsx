import { LoadingCharts } from "./LoadingCharts";

export default function LoadingHomePage() {
  return (
    <main className="lg:grid-cols-1FR340PX flex w-full  animate-pulse flex-col justify-items-center gap-5 text-black lg:grid lg:grid-rows-6 lg:gap-x-4 lg:overflow-hidden">
      <div
        role="status"
        className="h-[160px] w-[596px] rounded-md bg-gray-200"
      />
      <div className="flex items-start lg:col-start-2 lg:row-span-3 lg:row-start-1">
        <div className="h-[374px] w-[340px] rounded-md bg-gray-200" />
      </div>
      <LoadingCharts />
      <div className="row-start-4 w-full lg:col-start-2 lg:row-span-3 lg:mt-[-60px]">
        <div className="ml-4 flex flex-col gap-2">
          <div className="mb-4 h-[30px] w-full rounded-md bg-gray-200" />
          <div className="h-[40px] w-[324px] rounded-md bg-gray-200" />
          <div className="h-[40px] w-[324px] rounded-md bg-gray-200" />
          <div className="h-[40px] w-[324px] rounded-md bg-gray-200" />
          <div className="h-[40px] w-[324px] rounded-md bg-gray-200" />
        </div>
      </div>
    </main>
  );
}
