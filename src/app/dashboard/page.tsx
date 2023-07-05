import { HelloBanner } from "@/components/HelloBanner";
import { ListTasks } from "@/components/ListTasks";
import { Calendar } from "@/components/ui/calendar";

export default function Dashboard() {
  return (
    <main className="text-black">
      <HelloBanner />
      <ListTasks />
      <Calendar />
    </main>
  );
}
