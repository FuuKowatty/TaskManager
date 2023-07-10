"use client";

import dynamic from "next/dynamic";

import { DashboardHeader } from "@/components/DashboardHeader";

import { useSession } from "@/state/useSession";

const DynamicAdminView = dynamic(
  () => import("@/components/views/AdminView").then((m) => m.AdminView),
  { loading: () => <p>loading</p> }
);

const DynamicEmployeeView = dynamic(
  () => import("@/components/views/EmployeeView").then((m) => m.EmployeeView),
  { loading: () => <p>loading</p> }
);

export default function Dashboard() {
  const { sessionUser } = useSession();

  if (!sessionUser) {
    return null;
  }

  const { role } = sessionUser;

  return (
    <main className="grid w-full justify-items-center gap-x-4 overflow-hidden text-black lg:grid-cols-1FR340PX lg:grid-rows-6">
      <DashboardHeader />
      {role === "admin" || role === "manager" ? (
        <DynamicAdminView />
      ) : (
        <DynamicEmployeeView />
      )}
    </main>
  );
}
