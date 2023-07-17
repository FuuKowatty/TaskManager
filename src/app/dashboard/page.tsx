import { Charts } from "@/components/chart/RenderChart";
import { HelloBanner } from "@/components/HelloBanner";
import { Calendar } from "@/components/ui/calendar";

export default function Dashboard() {
  return (
    <main className="flex w-full flex-col  justify-items-center gap-5 text-black lg:grid lg:grid-cols-1FR340PX lg:grid-rows-6 lg:gap-x-4 lg:overflow-hidden">
      <HelloBanner />
      <Calendar />
      <Charts />
    </main>
  );
}
