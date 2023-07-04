import { HelloBanner } from "@/components/HelloBanner";
import { ListTasks } from "@/components/ListTasks";
import { LogoutButton } from "@/components/LogoutButton";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <HelloBanner />
      <LogoutButton />
      <ListTasks />
    </div>
  );
}
