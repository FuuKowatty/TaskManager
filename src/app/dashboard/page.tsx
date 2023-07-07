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
    <main className="auto lg:grid-cols-[1.5fr 1fr] grid w-full auto-rows-[200px] items-start justify-items-center gap-x-2 gap-y-4 py-20 text-black lg:auto-rows-[250px] lg:gap-x-16 lg:gap-y-0 lg:px-4 lg:py-0">
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
