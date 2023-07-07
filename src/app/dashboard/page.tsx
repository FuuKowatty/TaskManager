"use client";

import { AdminView } from "@/components/views/AdminView";
import { EmployeeView } from "@/components/views/EmployeeView";
import { ManagerView } from "@/components/views/ManagerView";

import { useSession } from "@/state/useSession";

export default function Dashboard() {
  const { sessionUser } = useSession();

  if (!sessionUser) {
    return null;
  }

  const { role } = sessionUser;

  return (
    <main className="grid w-full justify-items-center gap-x-4 text-black lg:grid-cols-1FR340PX">
      {/* <div className="w-full">
        <HelloBanner />
        <Calendar />
      </div>
      <ListTasks /> */}

      {role === "admin" && <AdminView />}
      {role === "manager" && <ManagerView />}
      {role === "employee" && <EmployeeView />}
    </main>
  );
}
