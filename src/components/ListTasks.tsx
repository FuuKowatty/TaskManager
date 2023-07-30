"use client";

import { useIncompletedTasks } from "@/hooks/api/useIncompletedTasks";
import { useSession } from "@/hooks/state/useSession";

import { ErrorMessage } from "./form/ErrorMessage";
import { Task } from "./Task";
import { LoadingEmployeesContent } from "./ui/LoadingEmployeesContent";

export function ListTasks() {
  const {
    sessionUser: { id },
  } = useSession();
  const { data: userTasks, status } = useIncompletedTasks(id);

  if (status === "loading") return <LoadingEmployeesContent />;
  if (status === "error") return <ErrorMessage error="Could not fetch tasks" />;

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex h-full flex-col items-center">
      <span className="mb-4 shrink-0 text-xl font-bold dark:text-white">
        Your Tasks:
      </span>
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
