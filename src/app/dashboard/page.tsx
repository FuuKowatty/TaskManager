import { HelloBanner } from "@/components/HelloBanner";
import { ListTasks } from "@/components/ListTasks";
import { Calendar } from "@/components/ui/calendar";

export default function Dashboard() {
  return (
    <main className="text-black">
      <h1>Dashboard</h1>
      <HelloBanner />
      <ListTasks />
      <Calendar />
    </main>
  );
}
