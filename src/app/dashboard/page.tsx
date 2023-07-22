"use client";

import { RenderCharts } from "@/components/chart/RenderChart";
import { HelloBanner } from "@/components/HelloBanner";
import { Calendar } from "@/components/ui/calendar";

import { useSession } from "@/hooks/state/useSession";

export default function Dashboard() {
  const {
    sessionUser: { isLogged, role, id },
  } = useSession();

  if (!isLogged)
    return (
      <main className="lg:grid-cols-1FR340PX flex w-full  animate-pulse flex-col justify-items-center gap-5 text-black lg:grid lg:grid-rows-6 lg:gap-x-4 lg:overflow-hidden">
        <div
          role="status"
          className="h-[160px] w-[596px] rounded-md bg-gray-200"
        />
        <div className="flex items-start lg:col-start-2 lg:row-span-3 lg:row-start-1">
          <div className="h-[374px] w-[340px] rounded-md bg-gray-200" />
        </div>
        <div className="row-start-2 row-end-7 flex h-full w-full flex-col gap-20 lg:block">
          <div className="flex h-[30%] justify-center gap-6 lg:items-center">
            <div className="h-[100px] w-[160px] rounded-md bg-gray-200" />
            <div className="h-[100px] w-[160px] rounded-md bg-gray-200" />
            <div className="h-[100px] w-[160px] rounded-md bg-gray-200" />
          </div>
          <div className="h-[70%] w-full rounded-md bg-gray-200" />
        </div>
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

  return (
    <main className="flex w-full flex-col justify-items-center gap-5 text-black md:grid md:grid-cols-DASHBOARD md:gap-x-6 md:gap-y-0 xl:grid-cols-DASHBOARD-BIG xl:grid-rows-6">
      <HelloBanner />
      <Calendar />
      <RenderCharts role={role} id={id} />
    </main>
  );
}
