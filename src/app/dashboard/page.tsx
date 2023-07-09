"use client";

import { DashboardHeader } from "@/components/DashboardHeader";
import { AdminView } from "@/components/views/AdminView";

import { useSession } from "@/state/useSession";

export default function Dashboard() {
  const { sessionUser } = useSession();

  if (!sessionUser) {
    return null;
  }

  const { role } = sessionUser;

  return (
    <main className="grid w-full justify-items-center gap-x-4 overflow-hidden text-black lg:grid-cols-1FR340PX">
      <DashboardHeader />
      {(role === "admin" || role === "manager") && <AdminView />}
    </main>
  );
}
