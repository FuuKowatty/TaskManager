import ManagerRoleView from "@/components/ManagerView";

export default function Dashboard() {
  return (
    <main className="grid w-full grid-cols-2 justify-items-center text-black">
      {/* <div className="w-full">
        <HelloBanner />
        <Calendar />
      </div>
      <ListTasks /> */}
      <ManagerRoleView />
    </main>
  );
}
