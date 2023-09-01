"use client";

import type { Role } from "@/types/users";

import { BestEmployess } from "./BestEmployess";
import { ListTasks } from "./ListTasks";

export function RoleDependentContent({ role }: { role: Role }) {
  return (
    <section className="relative mt-[-100px] h-[500px] w-full flex-col items-center md:mt-0 lg:col-start-2 lg:row-span-3 lg:row-start-4 lg:h-full">
      {role === "employee" ? <ListTasks /> : <BestEmployess />}
    </section>
  );
}
