import { HelloBanner } from "@/components/HelloBanner";
import { ListTasks } from "@/components/ListTasks";
import { Navbar } from "@/components/nav/Navbar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-screen bg-lightGray p-7">
      <Navbar />
      <main className="text-black">
        <h1>Dashboard</h1>
        <HelloBanner />
        <ListTasks />
      </main>
    </div>
  );
}
