"use client";

import { BestEmployess } from "./BestEmployess";
import { ListTasks } from "./ListTasks";

interface RoleDependentContentProps {
  role: string;
}

export function RoleDependentContent({ role }: RoleDependentContentProps) {
  return (
    <div className="relative flex h-full w-full flex-col items-center lg:col-start-2 lg:row-span-3 lg:row-start-4  lg:mt-[-60px]">
      {role === "employee" ? <ListTasks /> : <BestEmployess />}
    </div>
  );
}
