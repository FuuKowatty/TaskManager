import { HelloBanner } from "@/components/HelloBanner";
import { Calendar } from "@/components/ui/calendar";

export function DashboardHeader() {
  return (
    <>
      <HelloBanner />
      <div className="row-span-2">
        <Calendar />
      </div>
    </>
  );
}
