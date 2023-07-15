import { Charts } from "@/components/chart/RenderChart";
import { HelloBanner } from "@/components/HelloBanner";
import { Calendar } from "@/components/ui/calendar";

export default function Dashboard() {
  return (
    <main className="grid w-full justify-items-center gap-x-4 overflow-hidden text-black lg:grid-cols-1FR340PX lg:grid-rows-6">
      <HelloBanner />
      <Calendar />
      <Charts />
    </main>
  );
}
