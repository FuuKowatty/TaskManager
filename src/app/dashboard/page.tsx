import { HelloBanner } from "@/components/HelloBanner";
import { ListTasks } from "@/components/ListTasks";
import { Calendar } from "@/components/ui/calendar";

export default function Dashboard() {
  return (
    <main className="grid w-full grid-cols-2 justify-items-center text-black">
      <div className="w-full">
        <HelloBanner />
        <Calendar />
      </div>
      <ListTasks />
    </main>
  );
}
