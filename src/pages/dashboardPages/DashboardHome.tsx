
import { Calendar } from "../../components/ui/Calendar";
import { HelloBanner } from "../../components/HelloBanner";
import { DashboardLayoutPage, LoadingContext } from "./DashboardLayout";
import { RoleDependentContent } from "../../components/RoleDependentContent";
import { RenderCharts } from "../../components/chart/RenderChart";
import { LoadingHomePage } from "@/components/ui/LoadingHomePage";
import { useContext } from "react";

export function DashboardHome() {
    const { isPending } = useContext(LoadingContext);;
    return (
     <DashboardLayoutPage>
        {isPending ? <LoadingHomePage /> : (
          <main className="flex w-full flex-col justify-items-center gap-5 px-4 py-8 text-black md:grid md:grid-cols-DASHBOARD md:gap-x-6 md:gap-y-0  xl:grid-cols-DASHBOARD-BIG xl:grid-rows-6">
            <HelloBanner />
            <Calendar />
            <RenderCharts />
            <RoleDependentContent /> 
          </main>
        )}
      </DashboardLayoutPage>
    );
  }