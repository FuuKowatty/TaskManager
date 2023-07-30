"use client";

import type { Role } from "@/types/users";

import { BestEmployess } from "./BestEmployess";
import { ListTasks } from "./ListTasks";

export function RoleDependentContent({ role }: { role: Role }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center lg:col-start-2 lg:row-span-3 lg:row-start-4">
      {role === "employee" ? <ListTasks /> : <BestEmployess />}
    </div>
  );
}
