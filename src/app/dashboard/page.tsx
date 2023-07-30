"use client";

import { RenderCharts } from "@/components/chart/RenderChart";
import { HelloBanner } from "@/components/HelloBanner";
import { RoleDependentContent } from "@/components/RoleDependentContent";
import { Calendar } from "@/components/ui/calendar";
import LoadingHomePage from "@/components/ui/LoadingHomePage";

import { useSession } from "@/hooks/state/useSession";

export default function Dashboard() {
  const {
    sessionUser: { isLogged, role },
  } = useSession();

  if (!isLogged) return <LoadingHomePage />;

  return (
    <main className="flex w-full flex-col justify-items-center gap-5 px-4 py-8 text-black md:grid md:grid-cols-DASHBOARD md:gap-x-6 md:gap-y-0  xl:grid-cols-DASHBOARD-BIG xl:grid-rows-6">
      <HelloBanner />
      <Calendar />
      <RenderCharts />
      <RoleDependentContent role={role} />
    </main>
  );
}
