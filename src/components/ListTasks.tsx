"use client";

import { useIncompletedTasks } from "@/hooks/api/useIncompletedTasks";
import { useSession } from "@/hooks/state/useSession";

import { Task } from "./Task";
import { LoadingTasksList } from "./ui/LoadingTasksList";

export function ListTasks() {
  const {
    sessionUser: { id },
  } = useSession();
  const { data: userTasks, isLoading } = useIncompletedTasks(id);

  if (isLoading) return <LoadingTasksList />;
  if (!userTasks) return null;

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full flex-col items-center">
      <span className="mb-4 shrink-0 text-xl font-bold">Your Tasks:</span>
      {userTasks.length ? (
        <div className="flex w-full flex-col items-center overflow-y-auto">
          {userTasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </div>
      ) : (
        <div>No Tasks</div>
      )}
    </div>
  );
}
