import { HelloBanner } from "@/components/HelloBanner";
import { Calendar } from "@/components/ui/calendar";

export function DashboardHeader() {
  return (
    <>
      <HelloBanner />
      <div className="">
        <Calendar />
      </div>
    </>
  );
}
