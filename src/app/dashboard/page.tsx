import { Charts } from "@/components/chart/RenderChart";
import { HelloBanner } from "@/components/HelloBanner";
import { Calendar } from "@/components/ui/calendar";

export default function Dashboard() {
  return (
    <main className="flex w-full flex-col justify-items-center gap-5 text-black md:grid md:grid-cols-DASHBOARD md:gap-x-6 md:gap-y-0 xl:grid-cols-DASHBOARD-BIG xl:grid-rows-6">
      <HelloBanner />
      <Calendar />
      <Charts />
    </main>
  );
}
