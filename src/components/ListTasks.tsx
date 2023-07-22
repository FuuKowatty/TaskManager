"use client";

import { useUserTasks } from "@/hooks/api/useUserTasks";

import { Task } from "./Task";

export function ListTasks({ userId }: { userId: number }) {
  const { data } = useUserTasks(userId);

  if (!data) return <p>Could not Load data</p>;

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full flex-col items-center">
      <span className="mb-4 shrink-0 text-xl font-bold">Your Tasks:</span>
      {data.length ? (
        <div className="flex w-full flex-col items-center overflow-y-auto">
          {data.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </div>
      ) : (
        <div>No Tasks</div>
      )}
    </div>
  );
}
